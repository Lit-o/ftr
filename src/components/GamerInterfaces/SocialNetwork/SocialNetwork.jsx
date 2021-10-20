import React from "react";
import style from "./SocialNetwork.module.css"

const SocialNetwork = (props) => {
    let setUsers = props.users.map(u => {
        let unmark = () => {
            props.unmark(u.id)
        };
        let mark = () => {
            props.mark(u.id)
        };
        return (
            <div className={style.userCard} key={u.id}>
                <img
                    src={u.avaURL !== null ? u.avaURL : "https://www.gstatic.com/images/branding/product/2x/avatar_anonymous_120dp.png"}
                    alt="avatar"/>
                <p>{u.name}</p>
                <p>{u.status}</p>
                {u.isMarked
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
            <div className={style.pagination}>
                {setPages}
            </div>
            <h1 className="visuallyHidden">Social Network</h1>
            {setUsers}
        </div>
    )

}

export default SocialNetwork;
