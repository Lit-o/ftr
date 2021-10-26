import {connect} from "react-redux";
import Investments from "./Investments";



let mapStateToProps = (state) => {
    return {
        commonUtilityState : state.commonUtilityState,
        investmentsPage: state.investmentsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(Investments)

export default InventoryContainer;