import {connect} from "react-redux";
import {withModuleDisable} from "../../../hoc/withModuleDisable";
import Inventory from "./Inventory";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        inventoryPage: state.inventoryPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withModuleDisable
) (Inventory)