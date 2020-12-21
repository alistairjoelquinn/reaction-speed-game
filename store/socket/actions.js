export const socketConnected = () => {
    return dispatch => {
        dispatch({
            type: "SOCKET_CONNECTED"
        });
    };
};

export const gameFull = () => {
    return dispatch => {
        dispatch({
            type: "GAME_FULL"
        });
    };
};

export const playersCount = count => {
    return dispatch => {
        dispatch({
            type: "PLAYERS_COUNT",
            count
        });
    };
};

export const storePlayerId = id => {
    return dispatch => {
        dispatch({
            type: "PLAYER_ID_RECEIVED",
            id
        });
    };
};

export const storePlayerColor = color => {
    return dispatch => {
        dispatch({
            type: "PLAYER_COLOR_RECEIVED",
            color
        });
    };
};

export const storeWelcomeMessage = msg => {
    return dispatch => {
        dispatch({
            type: "WELCOME_MESSAGE_RECEIVED",
            msg
        });
    };
};

export const storeTakenColors = colors => {
    return dispatch => {
        dispatch({
            type: "TAKEN_COLORS_RECEIVED",
            colors
        });
    };
};

export const newColorChosen = color => {
    return dispatch => {
        dispatch({
            type: "NEW_COLOR_CHOSEN",
            color
        });
    };
};

export const readyToPlay = () => {
    return dispatch => {
        dispatch({
            type: "READY_TO_PLAY"
        });
    };
};

export const notReadyToPlay = () => {
    return dispatch => {
        dispatch({
            type: "NOT_READY_TO_PLAY"
        });
    };
};

export const playersGo = () => {
    return dispatch => {
        dispatch({
            type: "PLAYERS_GO"
        });
    };
};

export const buttonReset = () => {
    return dispatch => {
        dispatch({
            type: "BUTTON_RESET"
        });
    };
};

export const scoreUpdate = score => {
    return dispatch => {
        dispatch({
            type: "SCORE_UPDATE",
            score
        });
    };
};

export const gameWinner = winner => {
    return dispatch => {
        dispatch({
            type: "GAME_WINNER",
            winner
        });
    };
};

export const winnerReset = () => {
    return dispatch => {
        dispatch({
            type: "WINNER_RESET"
        });
    };
};