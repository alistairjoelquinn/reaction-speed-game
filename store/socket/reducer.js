const initialState = {
    connected: 'Not yet connected',
    gameFull: false,
    id: null,
    userColor: null,
    welcomeMessage: '',
    takenColors: []
};

export default (state = initialState, action) => {
    if (action.type === 'SOCKET_CONNECTED') {
        return {
            ...state,
            connected: 'SUCCESS!'
        };
    }
    if (action.type === 'GAME_FULL') {
        return {
            ...state,
            gameFull: true
        };
    }
    if (action.type === 'PLAYER_ID_RECEIVED') {
        return {
            ...state,
            id: action.id
        };
    }
    if (action.type === 'PLAYER_COLOR_RECEIVED') {
        return {
            ...state,
            userColor: action.color
        };
    }
    if (action.type === 'WELCOME_MESSAGE_RECEIVED') {
        return {
            ...state,
            welcomeMessage: action.msg
        };
    }
    if (action.type === 'TAKEN_COLORS_RECEIVED') {
        return {
            ...state,
            takenColors: action.colors
        };
    }
    if (action.type === 'NEW_COLOR_CHOSEN') {
        return {
            ...state,
            takenColors: [
                ...state.takenColors,
                action.color
            ]
        };
    }
    return state;
}