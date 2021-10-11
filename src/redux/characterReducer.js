const ADD_THOUGHT = 'ADD-THOUGHT';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';

export const addThoughtActionCreator = () => ({type: ADD_THOUGHT});
export const changeTextareaActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA, symbol: text});

let initialState = {
        thoughts: [
            {id: 0, thought: "Maybe I should think about something? Huh..."},
        ],
        characteristics: {
            agility: 7,
            strength: 8,
            intelligence: 7,
            luck: 9
        },
        textarea: 'lorem',
    }

const characterReducer = (state = initialState, action) => {
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