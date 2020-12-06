import * as io from 'socket.io-client';

import { socketConnected } from '../store/socket/actions';

export let socket;

export const init = store => {
    if (!socket) {
        socket = io.connect();
        store.dispatch(socketConnected());
        socket.on('playerId', id => {
            console.log('player id from server: ', id);
            // store.dispatch(storePlayerId(id))
        });
    }
};