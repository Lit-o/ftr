import './App.css';
import Header from "./components/Header/header";
import React from "react";
import Nav from "./components/Nav/Nav";
import ActionGraphicRepresentations from "./components/ActionGraphicRepresentations/ActionGraphicRepresentations";
import GamerInterfaces from "./components/GamerInterfaces/GamerInterfaces";

function App(props) {
    debugger
    return (
        <div className="Main">
            <Header/>
            <div className="App_body_wrapper">
                <Nav/>
                <GamerInterfaces dataToChar={props.appState.characterPage}
                                 dispatch={props.dispatch}/>
                <ActionGraphicRepresentations/>
            </div>
        </div>
    );
}


export default App;
