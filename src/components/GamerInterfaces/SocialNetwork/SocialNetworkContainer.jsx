import {connect} from "react-redux";
import {
    isFollowingAC,
    markAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unmarkAC
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
        isFollowing: state.socialPage.isFollowing,
        followingQueue: state.socialPage.followingQueue
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        isInFollowingQueue: (isFollowing, id) => {
            dispatch(isFollowingAC(isFollowing, id))
        }
    }
}

// URL container layer/ Эта обертка дает возможность получать данные url
let WithURLDataSocialNetworkClassAPI = withRouter(SocialNetworkClassAPI)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataSocialNetworkClassAPI)