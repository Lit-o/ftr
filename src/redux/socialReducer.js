const MARK = 'MARK';
const UNMARK = 'UNMARK';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 31,
    currentPage: 7
}
//         {
//             id: 0,
//             name: 'Zero-User',
//             status: 'Access denied',
//             isHaveJob: false,
//             isMarked: false,
//             avaURL: null
//         },

const socialReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK:
            return {
                ...state,
                // Т.к. нам нужно изменить объект в массиве, а не добавить новый - используем мап,
                // мап сам изначально создает новую копию массива, а вот в нем уже делаем новую копию изменяемого
                // объекта ...u и меняем в нем ,mark: true
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, isMarked: true}
                    }
                    return u
                })

            }
        case UNMARK:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, isMarked: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state,
                // склеиваем два массива, который был в стейте и который пришел.
                // ...action.users, видимо, в этом случае "раскрывается" спред-оператором "..."
                // для того, чтобы в конец добавился не новый массив, а его элементы
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
        default:
            return state;
    }
}

export const markAC = (userId) => ({type: MARK, userId});
export const unmarkAC = (userId) => ({type: UNMARK, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users:users});
export const setTotalUsersCountAC = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default socialReducer;