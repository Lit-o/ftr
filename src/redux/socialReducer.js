const MARK = 'MARK';
const UNMARK = 'UNMARK';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
}

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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const markAC = (userId) => ({type: MARK, userId});
export const unmarkAC = (userId) => ({type: UNMARK, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default socialReducer;