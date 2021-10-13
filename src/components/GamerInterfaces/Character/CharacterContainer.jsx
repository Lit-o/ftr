import React from "react";
import {addThoughtActionCreator, changeTextareaActionCreator} from "../../../redux/characterReducer";
import Character from "./Character";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dataToCharacter: state.characterPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendThought: () => {
            dispatch(addThoughtActionCreator())
        },
        changeTextarea: (text) => {
            dispatch(changeTextareaActionCreator(text))
        }
    }
}

const CharacterContainer = connect(mapStateToProps, mapDispatchToProps)(Character)

export default CharacterContainer;