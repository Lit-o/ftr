import {connect} from "react-redux";
import Inventory from "./Inventory";



let mapStateToProps = (state) => {
    return {
        commonUtilityState : state.commonUtilityState,
        inventoryPage: state.inventoryPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(Inventory)

export default InventoryContainer;