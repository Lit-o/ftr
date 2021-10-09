import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
