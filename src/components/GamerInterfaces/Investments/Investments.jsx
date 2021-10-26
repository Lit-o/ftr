import {withModuleDisable} from "../../../hoc/withModuleDisable";

const Investments = (props) => {
    return (
        <div>
            <h2>Investments</h2>
            <p>Expected time of recovery work : {props.investmentsPage.moduleRecoveryTime}</p>
        </div>
    )
}

let InvestmentsWithDisableComponent = withModuleDisable(Investments)

export default InvestmentsWithDisableComponent;