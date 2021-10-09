// bll simulation
import characterReducer from "./characterReducer";

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
        this._state.characterPage = characterReducer(this._state.characterPage, action);
        // this._state.characterPage = characterReducer(this._state.characterPage, action);
        // this._state.characterPage = characterReducer(this._state.characterPage, action);
        this._callSubscriber(this._state);
    }
}



window.store = store;
export default store;

//const - то, что в процессе работы программы не будет переоптередяться

//функцию можно сократить, если она делает только return,
// если она return объект {}, то прячем его в (),
// чтобы js не подумал, что мы объявляем функцию