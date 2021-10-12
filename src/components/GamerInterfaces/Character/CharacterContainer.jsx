import React from "react";
import {addThoughtActionCreator, changeTextareaActionCreator} from "../../../redux/characterReducer";
import Character from "./Character";


const CharacterContainer = (props) => {
    let state = props.store.getState().characterPage;

    let sendThought = () => {
        props.store.dispatch(addThoughtActionCreator());
    }

    let changeTextarea = (text) => {
        props.store.dispatch(changeTextareaActionCreator(text));
    }

    return (
        <Character sendThought={sendThought}  changeTextarea={changeTextarea} dataToCharacter={state}/>
    )
}

export default CharacterContainer;