const ADD_HISTORY = 'ADD_HISTORY'

let initialState = {
    stories: [
        {
            id: 0,
            isFavourite: false,
            sharelinkURL: 0,
            story: "I woke up in a good mood. I feel that is something good will happen today",
            time: '08.00 am // 01.05.2255'
        },
    ]
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HISTORY :
            let stateCopy = {
                ...state,
                textarea: action.symbol
            }
            return stateCopy;
        default:
            return state;
    }
};

export default historyReducer;