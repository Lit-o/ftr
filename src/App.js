import './App.css';
import Header from "./components/Header/header";
import React from "react";
import Nav from "./components/Nav/Nav";
import ActionGraphicRepresentations from "./components/ActionGraphicRepresentations/ActionGraphicRepresentations";
import GamerInterfaces from "./components/GamerInterfaces/GamerInterfaces";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    // debugger;
    return (
        <BrowserRouter>
            <div className="Main">
                <Header/>
                <div className="App_body_wrapper">
                    <Nav/>
                    <GamerInterfaces dataToChar={props.data}/>
                    <ActionGraphicRepresentations/>
                </div>
            </div>
         </BrowserRouter>
    );
}


export default App;
