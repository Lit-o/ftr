import {connect} from "react-redux";
import InventoryWithDisableModule from "./Inventory";



let mapStateToProps = (state) => {
    return {
        inventoryPage: state.inventoryPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryWithDisableModule)

export default InventoryContainer;