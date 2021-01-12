

const allPlays = (state = [], action) => {
    if(action.type==='SET_ALL_PLAYS'){
        return action.payload;
    }
    return state;
}

export default allPlays;