import {applyMiddleware, combineReducers, createStore} from "redux";
import characterReducer from "./characterReducer";
import historyReducer from "./historyReducer";
import socialReducer from "./socialReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    characterPage: characterReducer,
    historyPage: historyReducer,
    socialPage: socialReducer
})
let store = createStore(reducers, applyMiddleware(thunk));

export default store;