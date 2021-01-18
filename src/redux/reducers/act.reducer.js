
const act = (state = [], action) => {
    if(action.type==='SET_CHAPTERS'){
        return action.payload;
    }
    return state;
}

export default act;