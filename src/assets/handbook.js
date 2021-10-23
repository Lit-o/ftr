//const - то, что в процессе работы программы не будет переоптередяться

//функцию можно сократить, если она делает только return,
// если она return объект {}, то прячем его в (),
// чтобы js не подумал, что мы объявляем функцию


// Т.к. нам нужно изменить объект в массиве, а не добавить новый - используем мап,
// мап сам изначально создает новую копию массива, а вот в нем уже делаем новую копию изменяемого
// объекта ...u и меняем в нем followed: true
// return {
//     ...state,
//     users: state.users.map(u => {
//         if(u.id === action.userId) {
//             return {...u, followed: true}
//         }
//         return u
//     })
// }

// // URL container layer/ Эта обертка дает возможность получать данные url
// import {withRouter} from "react-router-dom";
// import SocialNetworkClassAPI from "../components/GamerInterfaces/SocialNetwork/SocialNetworkClassAPI";
// import {connect} from "react-redux";
//
// let WithURLDataSocialNetworkClassAPI = withRouter(SocialNetworkClassAPI)
//
// export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataSocialNetworkClassAPI)

// склеиваем два массива, который был в стейте и который пришел.
// ...action.users, видимо, в этом случае "раскрывается" спред-оператором "..."
// для того, чтобы в конец добавился не новый массив, а его элементы

//         {
//             id: 0,
//             name: 'Zero-User',
//             status: 'Access denied',
//             isHaveJob: false,
//             isMarked: false,
//             avaURL: null
//         },