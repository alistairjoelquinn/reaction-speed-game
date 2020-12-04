export const socketConnected = () => {
    return dispatch => {
        dispatch({
            type: "SOCKET_CONNECTED"
        });
    }
}