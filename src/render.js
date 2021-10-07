import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addThought} from "./redux/state";
import React from 'react';


export let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={state} addThought={addThought}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}