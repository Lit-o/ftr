import {connect} from "react-redux";
import {
    getUsersCountThunkCreator,
    getUsersThunkCreator,
    markThunkCreator,
    setCurrentPageAC,
    unmarkThunkCreator
} from "../../../redux/socialReducer";
import SocialNetworkClassAPI from "./SocialNetworkClassAPI";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        users: state.socialPage.users,
        pageSize: state.socialPage.pageSize,
        totalUsersCount: state.socialPage.totalUsersCount,
        currentPage: state.socialPage.currentPage,
        isFetching: state.socialPage.isFetching,
        followingQueue: state.socialPage.followingQueue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        getUsersThunkCreator: (pageSize, currentPage) => {
            dispatch(getUsersThunkCreator(pageSize, currentPage))
        },
        getUsersCountThunkCreator: () => {
            dispatch(getUsersCountThunkCreator())
        },
        unmarkThunkCreator: (userId) => {
            dispatch(unmarkThunkCreator(userId))
        },
        markThunkCreator: (userId) => {
            dispatch(markThunkCreator(userId))
        }
    }
}

// URL container layer/ Эта обертка дает возможность получать данные url
let WithURLDataSocialNetworkClassAPI = withRouter(SocialNetworkClassAPI)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataSocialNetworkClassAPI)