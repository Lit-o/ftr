import {connect} from "react-redux";
import {addThoughtActionCreator, changeTextareaActionCreator} from "../../../redux/characterReducer";
import History from "./History";



let mapStateToProps = (state) => {
    return {
        historyPage: state.historyPage
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

const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(History)

export default HistoryContainer;