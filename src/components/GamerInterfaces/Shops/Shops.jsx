import {Redirect} from "react-router-dom";
import {withModuleDisable} from "../../../hoc/withModuleDisable";


const Shops = (props) => {
    return (
        <div>
            <h2>Shops</h2>
            <p>Expected time of recovery work : {props.shopsPage.moduleRecoveryTime}</p>
        </div>
    )
}

let ShopsWithDisableComponent = withModuleDisable(Shops)


export default ShopsWithDisableComponent;