import {connect} from "react-redux";
import {withModuleDisable} from "../../../hoc/withModuleDisable";
import Investments from "./Investments";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        investmentsPage: state.investmentsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withModuleDisable
)(Investments)