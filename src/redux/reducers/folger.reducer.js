
const folger = (state = [], action) => {
    if(action.type==='SET_CHARACTERS'){
        return action.payload;
    }
    return state;
}

export default folger;