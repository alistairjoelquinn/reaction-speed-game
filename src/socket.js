import * as io from 'socket.io-client';

import { socketConnected, storePlayerId } from '../store/socket/actions';

export let socket;

export const init = store => {
    if (!socket) {
        socket = io.connect();
        store.dispatch(socketConnected());
        socket.on('game_full', () => store.dispatch(gameFull()));
        socket.on('playerId', id => store.dispatch(storePlayerId(id)));
    }
};