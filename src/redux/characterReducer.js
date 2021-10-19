const ADD_THOUGHT = 'ADD-THOUGHT';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA';



let initialState = {
    thoughts: [
        {id: 0, key: 0, thought: "Maybe I should think about something? Huh..."},
    ],
    characteristics: {
        agility: 1,
        strength: 1,
        intelligence: 1,
        freeCharPoints: 5
    },
    HP: {
        capacityHP: 10,
        currentHP: 7
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
            // Это можно описать кодом ниже.
            // Сначала спредим общий стейт,
            // а потом уточняем, что нужно перезатереть, оверайдим, перезаписываем, переопределяем.
            // Копируем только то, что планируем изменить. Вот у нас есть объекты в массиве thoughts,
            // но мы их менять не планируем, планируем только добавлять новые,
            // значит и копировать существующие объекты в этом кейсе не нужно

            // let stateCopy = {
            //     ...state,
            //     thoughts: [...state.thoughts]
            // } return stateCopy;
            // stateCopy.thoughts.push(newText);
            // stateCopy.textarea = ''; Эта запись равна той,
            // что ниже, пуш заменили на запятую в спрет операторе

            return {
                ...state,   // ...state.thoughts копирует
                // элементы массива, после запятой добавляет новый элемент newText,
                // если запятую поставить перед копированием массива,
                // то сможем элемент добавить перед основным телом массива
                thoughts: [...state.thoughts, newText],
                textarea: ''
            };
        }
        case CHANGE_TEXTAREA :
            return {
                ...state,
                textarea: action.textareaValue
            };
        default:
            return state;
    }
}

export const addThoughtActionCreator = () => ({type: ADD_THOUGHT});
export const changeTextareaActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA, textareaValue: text});

export default characterReducer;