import SocialNetwork from "./SocialNetwork";
import {connect} from "react-redux";
import {markAC, setUsersAC, unmarkAC} from "../../../redux/socialReducer";

let mapStateToProps = (state) => {
    return {
        users: state.socialPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        mark: (userId) => {
            dispatch(markAC(userId))
        },
        unmark: (userId) => {
            dispatch(unmarkAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetwork)