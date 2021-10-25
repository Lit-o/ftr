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


// constructor официально не является методом жизненного цикла,
// но по сути, он говорит, что компонент сконструировался.
// Компонент, при переходе на другую страницу стирается из памяти,
// но пока действия происходят на этой странице, то только повторно вызывется рендер(),
// конструктор запускается только один раз при заходе на эту страницу.
// constructor(props) {
//     super(props);
// }


// Одна строка с thunkCreator заменяет остальные строки
// this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
// // this.props.toggleIsFetching(true);
// // socialAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
// //     this.props.toggleIsFetching(false);
// //     this.props.setUsers(data.items);
// // });



// создаем массив, с помощью цикла for и метода push высчитав
// pagesCount (округляем в большую сторону деление Math.ceil,
// чтобы не потерять "неполную страничку"),
// потом уже в рендере создаем массив с разметкой используя map()
// import style from "../components/GamerInterfaces/SocialNetwork/SocialNetwork.module.css";
// // import React from "react";
// import SocialNetwork from "../components/GamerInterfaces/SocialNetwork/SocialNetwork";

// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
// let pages = [];
// for (let i = 1; i <= pagesCount && i <= 10; i++) {
//     pages.push(i)
// }

// <span
//     className={(page === props.currentPage) ? style.pageSelected : ''}
//     // onClick={(page !== props.currentPage) && onPagesClick}> это короткая,
//     // но не совсем корректная запись однократного условия, правильнее писать так, как ниже
//     onClick={(page !== props.currentPage) ? () => {
//         props.onPagesClick(page)
//     } : undefined}
//     key={page}>
//                     {page}
//                 </span>

// let onPagesClick = (e) => {
//     let currentPage = Number(e.target.textContent);
//     props.setCurrentPage(currentPage);
// }

//
// render() {
//     // if (this.props.isFetching) {
//     //     return <Preloader />
//     // }
//     return (
//         <>
//             <SocialNetwork
//                 totalUsersCount={this.props.totalUsersCount}
//                 pageSize={this.props.pageSize}
//                 currentPage={this.props.currentPage}
//                 users={this.props.users}
//                 isFetching={this.props.isFetching}
//                 followingQueue={this.props.followingQueue}
//                 unmarkThunkCreator={this.props.unmarkThunkCreator}
//                 markThunkCreator={this.props.markThunkCreator}
//                 onPagesClick={this.onPagesClick}/>
//         </>
//     )
// }









//         {
//             id: 0,
//             name: 'Zero-User',
//             status: 'Access denied',
//             isHaveJob: false,
//             isMarked: false,
//             avaURL: null
//         },