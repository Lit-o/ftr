import {applyMiddleware, combineReducers, createStore} from "redux";
import characterReducer from "./characterReducer";
import historyReducer from "./historyReducer";
import socialReducer from "./socialReducer";
import thunk from "redux-thunk";
import commonUtilityReducer from "./commonUtilityReducer";
import inventoryReducer from "./inventoryReducer";
import shopsReducer from "./shopsReducer";
import investmentsReducer from "./investmentsReducer";


let reducers = combineReducers({
    characterPage: characterReducer,
    inventoryPage: inventoryReducer,
    shopsPage: shopsReducer,
    investmentsPage: investmentsReducer,
    historyPage: historyReducer,
    socialPage: socialReducer,
    commonUtilityState: commonUtilityReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;