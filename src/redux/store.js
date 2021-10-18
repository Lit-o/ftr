import {combineReducers, createStore} from "redux";
import characterReducer from "./characterReducer";
import historyReducer from "./historyReducer";
import socialReducer from "./socialReducer";

let reducers = combineReducers({
    characterPage: characterReducer,
    historyPage: historyReducer,
    socialPage: socialReducer
})
let store = createStore(reducers);

export default store;