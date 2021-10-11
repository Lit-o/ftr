import {combineReducers, createStore} from "redux";
import characterReducer from "./characterReducer";
import historyReducer from "./historyReducer";

let reducers = combineReducers({
    characterPage: characterReducer,
    historyPage: historyReducer
})
let store = createStore(reducers);

export default store;