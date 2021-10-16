const ADD_THOUGHT = 'ADD-THOUGHT';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';

export const addThoughtActionCreator = () => ({type: ADD_THOUGHT});
export const changeTextareaActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA, symbol: text});

let initialState = {
        thoughts: [
            {id: 0, key: 0, thought: "Maybe I should think about something? Huh..."},
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
        case ADD_THOUGHT: {
            let newText = {
                id: (state.thoughts.length - 1) + 1,
                key: (state.thoughts.length - 1) + 1,
                thought: state.textarea,
            };

            let stateCopy = {...state}
            stateCopy.thoughts = [...state.thoughts]
            stateCopy.thoughts.push(newText);
            stateCopy.textarea = '';
            return stateCopy;
        }
        case CHANGE_TEXTAREA :
            let stateCopy = {...state};
            stateCopy.textarea = action.symbol;
            return stateCopy;
        default:
            return state;
    }
}

export default characterReducer;