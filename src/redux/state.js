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

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-THOUGHT') {
            let newText = {
                id: 4,
                thought: this._state.characterPage.textarea
            };
            this._state.characterPage.thoughts.push(newText);
            this._state.characterPage.textarea = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-TEXTAREA') {
            this._state.characterPage.textarea = action.symbol;
            this._callSubscriber(this._state);
        }
    },
}

window.store = store;
export default store;