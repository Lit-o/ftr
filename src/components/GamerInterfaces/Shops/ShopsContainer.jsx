import {connect} from "react-redux";
import ShopsWithDisableComponent from "./Shops";


let mapStateToPropsForRedirect = (state) => {
    return {
        commonUtilityState : state.commonUtilityState,
    }
}
let mapStateToProps = (state) => {
    return {
        shopsPage: state.shopsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let ShopsWithDisableComponentAndRedirectProps = connect(mapStateToPropsForRedirect) (ShopsWithDisableComponent)

const ShopsContainer = connect(mapStateToProps, mapDispatchToProps)(ShopsWithDisableComponentAndRedirectProps)

export default ShopsContainer;