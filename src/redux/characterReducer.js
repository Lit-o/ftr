const ADD_THOUGHT = 'ADD-THOUGHT';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';

export const addThoughtActionCreator = () => ({type: ADD_THOUGHT});
export const changeTextareaActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA, symbol: text});

const characterReducer = (state, action) => {
    switch (action.type) {
        case ADD_THOUGHT:
            let newText = {
                id: 4,
                thought: state.textarea
            };
            state.thoughts.push(newText);
            state.textarea = '';
            return state;
        case CHANGE_TEXTAREA :
            state.textarea = action.symbol;
            return state;
        default:
            return state;
    }
}

export default characterReducer;