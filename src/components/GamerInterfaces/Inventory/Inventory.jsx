import {Redirect} from "react-router-dom";


const Inventory = (props) => {
    if (props.commonUtilityState.isModuleInRecoveryDisable) {return <Redirect to={"/nf010722"} />}

    return (
        <div>
            <h2>Inventory</h2>
            <p>Expected time of recovery work : {props.inventoryPage.moduleRecoveryTime}</p>
        </div>
    )
}

export default Inventory;