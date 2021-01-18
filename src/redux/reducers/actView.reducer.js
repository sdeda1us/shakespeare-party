
const actView = (state = [], action) => {
    if(action.type==='SET_ACT_VIEW'){
        return action.payload;
    }
    return state;
}

export default actView;