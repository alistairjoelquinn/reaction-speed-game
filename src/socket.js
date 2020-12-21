import * as io from 'socket.io-client';

import {
    buttonReset, gameFull, newColorChosen, playersGo, readyToPlay,
    scoreUpdate, socketConnected, storePlayerColor, gameWinner,
    storePlayerId, storeTakenColors, storeWelcomeMessage, winnerReset,
    playersCount
} from '../store/socket/actions';

export let socket;

export const init = store => {
    if (!socket) {
        socket = io.connect();
        store.dispatch(socketConnected());
        socket.on('game_full', () => store.dispatch(gameFull()));
        socket.on('playersCount', count => store.dispatch(playersCount(count)));
        socket.on('playerId', id => store.dispatch(storePlayerId(id)));
        socket.on('playerColor', color => store.dispatch(storePlayerColor(color)));
        socket.on('welcomeMessage', msg => store.dispatch(storeWelcomeMessage(msg)));
        socket.on('takenColors', colors => store.dispatch(storeTakenColors(colors)));
        socket.on('newColorChosen', color => store.dispatch(newColorChosen(color)));
        socket.on('readyToPlay', () => store.dispatch(readyToPlay()));
        socket.on('playersGo', () => store.dispatch(playersGo()));
        socket.on('buttonReset', () => store.dispatch(buttonReset()));
        socket.on('scoreUpdate', score => store.dispatch(scoreUpdate(score)));
        socket.on('winner', winner => store.dispatch(gameWinner(winner)));
        socket.on('winnerReset', () => store.dispatch(winnerReset()));
    }
};