const readingText = (state = [], action) => {
    if(action.type==='SET_READING_TEXT'){
        return action.payload;
    }
    return state;
}

export default readingText;