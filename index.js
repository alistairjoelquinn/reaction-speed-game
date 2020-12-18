const express = require('express');
const app = express();
const compression = require('compression');
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: 'localhost:8080' });
const consola = require('consola');
const { selectedColorsCalculate } = require('./utils/selectedColorsCalculate');

app.use(compression());

if (process.env.NODE_ENV !== 'production') {
    app.use(
        '/output.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/output.js', (req, res) => res.sendFile(`${__dirname}/output.js`));
}

app.get('*', (req, res) => res.sendFile(__dirname + '/init/index.html'));

server.listen(8080, () => consola.success("Server Listening"));

const currentUsers = {};
const colorScores = {
    blue: 0,
    orange: 0,
    pink: 0,
    green: 0
};
let waiting = false;

io.on('connection', (socket) => {
    if (Object.keys(currentUsers).length >= 4) {
        io.to(socket.id).emit("game_full", true);
        return;
    } else {
        currentUsers[socket.id] = null;
        io.to(socket.id).emit("playerId", socket.id);
        io.to(socket.id).emit("welcomeMessage", `
            You are player number ${Object.keys(currentUsers).length}!
            ${selectedColorsCalculate(currentUsers)}
        `);
        io.to(socket.id).emit("takenColors", Object.values(currentUsers).filter(Boolean));
        consola.success(currentUsers);
    };

    socket.on('colorSelected', ({ userId, userColor }) => {
        currentUsers[userId] = userColor;
        consola.success(currentUsers);
        io.to(socket.id).emit("playerColor", userColor);
        io.emit('newColorChosen', userColor);
        if (Object.values(currentUsers).filter(Boolean).length === 4) {
            io.emit('readyToPlay');
            gameInitiate();
        }
    });

    socket.on('playerPress', (userId) => {
        if (waiting === true) {
            updateScore(userId);
        } else {
            reduceScore(userId);
            return;
        }
        waiting = false;
        io.emit('buttonReset');
        play();
    })

    const gameInitiate = () => setTimeout(play, 8000);

    const play = () => {
        setTimeout(() => {
            console.log('game GO');
            io.emit('playersGo');
            waiting = true;
        }, randomTimeCounter());
    }

    const updateScore = (userId) => {
        colorScores[currentUsers[userId]]++;
        io.emit('scoreUpdate', colorScores);
    };

    const reduceScore = (userId) => {
        colorScores[currentUsers[userId]]--;
        io.emit('scoreUpdate', colorScores);
    };

    const randomTimeCounter = () => {
        const timeValue = Math.floor(Math.random() * 10000);
        console.log('timeValue: ', timeValue);
        return timeValue;
    };
});