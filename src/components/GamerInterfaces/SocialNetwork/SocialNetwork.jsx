import React from "react";
import style from "./SocialNetwork.module.css"
import Preloader from "../../common/Preloader/Preloader";

const SocialNetwork = (props) => {
    let setUsers = props.users.map(u => {
        let unmark = () => {
            props.unmarkThunkCreator(u.id)
        };

        let mark = () => {
            props.markThunkCreator(u.id)
        };
        return (
            <div className={style.userCard} key={u.id}>
                <img
                    src={u.photos.small !== null ? u.photos.small : "https://www.gstatic.com/images/branding/product/2x/avatar_anonymous_120dp.png"}
                    alt="avatar"/>
                <p>{u.name}</p>
                <p>{u.status}</p>
                {u.followed
                    ? <button disabled={props.followingQueue.some(arrayItemData => arrayItemData === u.id)} onClick={unmark}>Unmark</button>
                    : <button disabled={props.followingQueue.some(arrayItemData => arrayItemData === u.id)} onClick={mark}>Mark</button>}
            </div>
        )
    })

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 10; i++) {
        pages.push(i)
    }

    let setPages = pages.map(page => {
        return (
            <span
                className={(page === props.currentPage) ? style.pageSelected : ''}
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
