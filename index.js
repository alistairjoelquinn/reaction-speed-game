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
    });
});