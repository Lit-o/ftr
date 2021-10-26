import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => {
    return {
        commonUtilityState : state.commonUtilityState,
    }
}

export const withModuleDisable = (Component) => {
    let moduleDisable = (props) => {
        if (props.commonUtilityState.isModuleInRecoveryDisable) {return <Redirect to={"/nf010722"} />}
        return <Component {...props}/>
    }

    let connectedModuleDisable = connect(mapStateToPropsForRedirect)(moduleDisable)

    return connectedModuleDisable
}

