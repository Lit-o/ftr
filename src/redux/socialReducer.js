import {socialAPI} from "../api/api";

const MARK = 'MARK';
const UNMARK = 'UNMARK';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 31,
    currentPage: 1,
    isFetching: false,
    followingQueue: []
}

const socialReducer = (state = initialState, action) => {

    switch (action.type) {
        case MARK:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNMARK:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingQueue: action.isFollowing
                    ? [...state.followingQueue, action.id]
                    : state.followingQueue.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const markAC = (userId) => ({type: MARK, userId});
export const unmarkAC = (userId) => ({type: UNMARK, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setTotalUsersCountAC = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const isFollowingAC = (isFollowing, id) => ({type: FOLLOWING_IN_PROGRESS, isFollowing, id})

export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        socialAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
        });
    }
}

export const getUsersCountThunkCreator = () => {
    return (dispatch) => {
        socialAPI.getUsersCount().then(data => {
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
    }
}

export const unmarkThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingAC(true, userId));
        socialAPI.setUnfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unmarkAC(userId));
            }
            dispatch(isFollowingAC(false, userId));
        })
    }
}

export const markThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingAC(true, userId));
        socialAPI.setFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(markAC(userId));
            }
            dispatch(isFollowingAC(false, userId));
        })
    }
}



export default socialReducer;