const sceneView = (state = [], action) => {
    if(action.type==='SET_SCENE_VIEW'){
        return action.payload;
    }
    return state;
}

export default sceneView;