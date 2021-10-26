import {connect} from "react-redux";
import Shops from "./Shops";



let mapStateToProps = (state) => {
    return {
        commonUtilityState : state.commonUtilityState,
        shopsPage: state.shopsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ShopsContainer = connect(mapStateToProps, mapDispatchToProps)(Shops)

export default ShopsContainer;