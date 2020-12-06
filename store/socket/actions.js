export const socketConnected = () => {
    return dispatch => {
        dispatch({
            type: "SOCKET_CONNECTED"
        });
    }
}

export const gameFull = () => {
    return dispatch => {
        dispatch({
            type: "GAME_FULL"
        });
    }
}

export const storePlayerId = id => {
    return dispatch => {
        dispatch({
            type: "PLAYER_ID_RECEIVED",
            id
        });
    }
}