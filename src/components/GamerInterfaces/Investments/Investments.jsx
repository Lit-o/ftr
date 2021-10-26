import {Redirect} from "react-router-dom";


const Investments = (props) => {
    if (props.commonUtilityState.isModuleInRecoveryDisable) {return <Redirect to={"/nf010722"} />}

    return (
        <div>
            <h2>Investments</h2>
            <p>Expected time of recovery work : {props.investmentsPage.moduleRecoveryTime}</p>
        </div>
    )
}

export default Investments;