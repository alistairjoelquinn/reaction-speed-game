const express = require('express');
const app = express();
const compression = require('compression');
const cookieSession = require('cookie-session');
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: 'localhost:8080' });
const consola = require('consola');

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
    consola.info(Object.keys(currentUsers).length);

    if (Object.keys(currentUsers).length <= 4) {
        currentUsers[socket.id] = null;
        consola.success(currentUsers);
    }

});