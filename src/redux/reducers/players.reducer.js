const allPlayEvents = (state = [], action) => {
    if(action.type==='SET_PLAYERS'){
        return action.payload;
    }
    return state;
}

export default allPlayEvents;