
const takenParts = (state=[], action) => {
    if(action.type==='SET_TAKEN_PARTS'){
        return action.payload;
    }
    return state;
}

export default takenParts;