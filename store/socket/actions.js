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

export const storePlayerColor = color => {
    return dispatch => {
        dispatch({
            type: "PLAYER_COLOR_RECEIVED",
            color
        });
    }
}

export const storeWelcomeMessage = msg => {
    console.log('msg: ', msg);
    return dispatch => {
        dispatch({
            type: "WELCOME_MESSAGE_RECEIVED",
            msg
        });
    }
}