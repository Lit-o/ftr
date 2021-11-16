// bll simulation
import characterReducer from "./characterReducer";
import historyReducer from "./historyReducer"


let store = {
    _state: {
        characterPage: {
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
        },
        historyPage : {
            stories : {
                id: 0,
                isFavourite: false,
                sharelinkURL: 0,
                story: "I woke up in a good mood. I feel that is something good will happen today"
            }
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
        this._state.historyReducer = historyReducer(this._state.characterPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
