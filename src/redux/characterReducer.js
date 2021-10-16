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
                id: (state.thoughts[state.thoughts.length - 1].id) + 1,
                key: (state.thoughts[state.thoughts.length - 1].key) + 1,
                thought: state.textarea,
            };

            // глубокое копирование
            // let stateCopy = {...state}
            // stateCopy.thoughts = [...state.thoughts]
            // Это можно описать строками ниже.
            // Сначала спредим общий стейт,
            // а потом уточняем, что нужно перезатереть, оверайдим, перезаписываем, переопределяем.
            // Копируем только то, что планируем изменить. Вот у нас есть объекты в массиве thoughts,
            // но мы их менять не планируем, планируем только добавлять новые,
            // значит и копировать существующие объекты в этом кейсе не нужно

            let stateCopy = {
                ...state,
                thoughts: [...state.thoughts]
            }
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