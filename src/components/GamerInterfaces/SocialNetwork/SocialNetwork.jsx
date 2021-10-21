import React from "react";
import style from "./SocialNetwork.module.css"
import Preloader from "../../common/Preloader/Preloader";
import * as axios from "axios";

const SocialNetwork = (props) => {
    debugger
    let setUsers = props.users.map(u => {
        let unmark = () => {
            axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
                    withCredentials: true,
                    headers: {"API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"}
                }
            ).then(response => {
                if (response.data.resultCode == 0) {
                    props.unmark(u.id);
                }
            })
        };

        let mark = () => {
            axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {}, {
                    withCredentials: true,
                    headers: {"API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"}
                }
            ).then(response => {
                if (response.data.resultCode == 0) {
                    props.mark(u.id);
                }
            })
        };

        return (
            <div className={style.userCard} key={u.id}>
                <img
                    src={u.avaURL !== null ? u.avaURL : "https://www.gstatic.com/images/branding/product/2x/avatar_anonymous_120dp.png"}
                    alt="avatar"/>
                <p>{u.name}</p>
                <p>{u.status}</p>
                {u.followed
                    ? <button onClick={unmark}>Unmark</button>
                    : <button onClick={mark}>Mark</button>}
            </div>
        )
    })

    // создаем массив, с помощью цикла for и метода push высчитав
    // pagesCount (округляем в большую сторону деление Math.ceil,
    // чтобы не потерять "неполную страничку"),
    // потом уже в рендере создаем массив с разметкой используя map()
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 10; i++) {
        pages.push(i)
    }

    // let onPagesClick = (e) => {
    //     let currentPage = Number(e.target.textContent);
    //     props.setCurrentPage(currentPage);
    // }

    let setPages = pages.map(page => {
        return (
            <span
                className={(page === props.currentPage) ? style.pageSelected : ''}
                // onClick={(page !== props.currentPage) && onPagesClick}> это короткая,
                // но не совсем корректная запись однократного условия, правильнее писать так, как ниже
                onClick={(page !== props.currentPage) ? () => {
                    props.onPagesClick(page)
                } : undefined}
                key={page}>
                    {page}
                </span>
        )
    })

    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Social Network</h1>

            <div className={style.pagination}> {setPages} </div>
            {props.isFetching ? <Preloader/> : null}
            {setUsers}
        </div>
    )

}

export default SocialNetwork;
