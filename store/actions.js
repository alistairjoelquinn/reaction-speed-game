export const startGame = () => {
    return dispatch => {
        dispatch({
            type: "START_GAME"
        });
    }
}