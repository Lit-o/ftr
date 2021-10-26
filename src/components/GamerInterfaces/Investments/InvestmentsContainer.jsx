import {connect} from "react-redux";
import InvestmentsWithDisableComponent from "./Investments";



let mapStateToProps = (state) => {
    return {
        investmentsPage: state.investmentsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(InvestmentsWithDisableComponent)

export default InventoryContainer;