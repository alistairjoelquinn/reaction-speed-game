const initialState = {
    connected: 'Its almost mate - SOCKETSS'
};

export default (state = initialState, action) => {
    if (action.type === 'SOCKET_CONNECTED') {
        return {
            connected: 'SUCCESS!'
        }
    }
    return state;
}