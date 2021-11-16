let initialState = {
    isEmpty: true,
    moduleRecoveryTime: "unknown",
}

const investmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default investmentsReducer;