const initialState = {
    connected: 'Not yet connected',
    gameFull: false,
    id: null,
    userColor: null
};

export default (state = initialState, action) => {
    if (action.type === 'SOCKET_CONNECTED') {
        return {
            ...state,
            connected: 'SUCCESS!'
        }
    }
    if (action.type === 'GAME_FULL') {
        return {
            ...state,
            gameFull: true
        }
    }
    if (action.type === 'PLAYER_ID_RECEIVED') {
        return {
            ...state,
            id: action.id
        }
    }
    return state;
}