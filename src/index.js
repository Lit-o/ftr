import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"
import {addThought} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {changeTextarea} from "./redux/state";
import {subscribe} from "./redux/state";


let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={state} addThought={addThought} changeTextarea={changeTextarea}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree(state);

subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
