const playEvent = (state = [], action) => {
    if(action.type==='SET_PLAY_EVENT'){
        return action.payload;
    }
    return state;
}

export default playEvent;