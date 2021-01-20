
const charLines = (state = [], action) => {
    if(action.type==='SET_CHAR_LINES'){
        return action.payload;
    }
    return state;
}

export default charLines;