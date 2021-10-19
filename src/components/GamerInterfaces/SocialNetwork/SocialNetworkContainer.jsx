import SocialNetwork from "./SocialNetwork";
import {connect} from "react-redux";
import {markAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unmarkAC} from "../../../redux/socialReducer";

let mapStateToProps = (state) => {
    return {
        users: state.socialPage.users,
        pageSize: state.socialPage.pageSize,
        totalUsersCount: state.socialPage.totalUsersCount,
        currentPage: state.socialPage.currentPage
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
        },
        setUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetwork)