const playText = (state = [], action) => {
    if(action.type==='SET_TEXT'){
        return action.payload;
    }
    return state;
}

export default playText;