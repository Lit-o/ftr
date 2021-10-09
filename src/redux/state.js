// bll simulation
const ADD_THOUGHT = 'ADD-THOUGHT';
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA'

let store = {

    _state: {
        characterPage: {
            thoughts: [
                {id: 1, thought: "Maybe I should think about something? Huh..."},
            ],
            characteristics: {
                agility: 7,
                strength: 8,
                intelligence: 7,
                luck: 9
            },
            textarea: 'lorem',
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('tree update')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_THOUGHT) {
            let newText = {
                id: 4,
                thought: this._state.characterPage.textarea
            };
            this._state.characterPage.thoughts.push(newText);
            this._state.characterPage.textarea = '';
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_TEXTAREA) {
            this._state.characterPage.textarea = action.symbol;
            this._callSubscriber(this._state);
        }
    },
}

export const addThoughtActionCreator = () => ({type: ADD_THOUGHT});
export const changeTextareaActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA, symbol: text});


window.store = store;
export default store;

//const - то, что в процессе работы программы не будет переоптередяться

//функцию можно сократить, если она делает только return,
// если она return объект {}, то прячем его в (),
// чтобы js не подумал, что мы объявляем функцию