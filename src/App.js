import './App.css';
import Header from "./components/Header/header";
import React from "react";
import Nav from "./components/Nav/Nav";
import ActionGraphicRepresentations from "./components/ActionGraphicRepresentations/ActionGraphicRepresentations";
import GamerInterfaces from "./components/GamerInterfaces/GamerInterfaces";

function App(props) {
    return (
        <div className="Main">
            <Header/>
            <div className="App_body_wrapper">
                <Nav/>
                <GamerInterfaces dataToChar={props.appState.characterPage}
                                 addThought={props.addThought}
                                 changeTextarea={props.changeTextarea}/>
                <ActionGraphicRepresentations/>
            </div>
        </div>
    );
}


export default App;
