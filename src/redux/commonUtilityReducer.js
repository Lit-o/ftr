const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'

let initialState = {
    isModuleInRecoveryDisable: true
}

const commonUtilityReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default commonUtilityReducer;