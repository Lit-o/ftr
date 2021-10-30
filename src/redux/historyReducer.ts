const ADD_TO_FAVOURITE = 'ADD/ADD_TO_FAVOURITE'

export type initialStateType = {
    isModuleInRecoveryDisable: boolean
    stories: Array<storyType>
}

export type storyType = {
    id: number
    isFavourite: boolean
    sharelinkURL: number
    story: string
    time: string
    date: string
}

let initialState: initialStateType = {
    isModuleInRecoveryDisable: false,
    stories: [
        {
            id: 0,
            isFavourite: false,
            sharelinkURL: 0,
            story: "I woke up in a good mood. Spend my morning time well. I feel that is something good will happen today",
            time: '08:00 -> 08:42 ',
            date: '01.05.2255'
        },
        {
            id: 1,
            isFavourite: true,
            sharelinkURL: 0,
            story: "What a Heck?! Someone was shooting on the street and a stray bullet smashed my window. It's good that the bullet didn't hit me. My insurance won't cover that.",
            time: '09:16 -> 09:17 ',
            date: '01.05.2255'
        },
    ]
}

const historyReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE :
            return {
                ...state,
                isFavourite: true,
            }

        default:
            return state;
    }
};

export default historyReducer;