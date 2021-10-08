// bll simulation

let store = {

    _state: {
        characterPage : {
            thoughts: [
                {id: 1, thought: "Maybe I should think about something? Huh..."},
            ],
            characteristics: {
                agility : 7,
                strength : 8,
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

    addThought() {
        let newText = {
            id: 4,
            thought: this._state.characterPage.textarea
        };
        this._state.characterPage.thoughts.push(newText);
        this._state.characterPage.textarea = '';
        this._callSubscriber(this._state);
    },

    changeTextarea(symbol) {
        this._state.characterPage.textarea = symbol;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {},
}
window.store = store;
export default store;