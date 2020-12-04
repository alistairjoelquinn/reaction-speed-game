const initialState = {
    inPlay: false
};

export default (state = initialState, action) => {
    if (action.type == "START_GAME") {
        return {
            ...state,
            inPlay: true
        }
    }
    return state;
}