const ADD_HISTORY = 'ADD_HISTORY'

let initialState = {
    stories : {
        id: 0,
        isFavourite: false,
        sharelinkURL: 0,
        story: "I woke up in a good mood. I feel that is something good will happen today"
    }
}

const historyReducer = (state = initialState, action) => {
    return state;
};

export default historyReducer;