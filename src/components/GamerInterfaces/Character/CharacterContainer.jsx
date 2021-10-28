import {addThoughtActionCreator, changeTextareaActionCreator, updateStatusAC} from "../../../redux/characterReducer";
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
        },
        updateStatus: (value) => {
            dispatch(updateStatusAC(value))
        }
    }
}

const CharacterContainer = connect(mapStateToProps, mapDispatchToProps)(Character)

export default CharacterContainer;