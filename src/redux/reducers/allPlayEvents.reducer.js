
const allPlayEvents = (state = [], action) => {
    if(action.type==='SET_ALL_PLAY_EVENTS'){
        return action.payload;
    }
    return state;
}

export default allPlayEvents;