const express = require('express');
const app = express();
const compression = require('compression');
const cookieSession = require('cookie-session');
const server = require('http').Server(app);
const io = require('socket.io')(server, { origins: 'localhost:8080' });
const consola = require('consola');
const cookieSessionMiddleware = cookieSession({
    secret: `It's been emotional`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(compression());
app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

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

io.on('connection', (socket) => {
    if (!socket.request.session.userId) return socket.disconnect(true);
    const { userId } = socket.request.session;
    onlineUsers[userId] = socket.id;

    updateOnlineUsers(Object.keys(onlineUsers))
        .then(({ rows }) => {
            io.sockets.emit('onlineUsers', rows);
        })
        .catch(err => console.error('Error updating online users: ', err));


});