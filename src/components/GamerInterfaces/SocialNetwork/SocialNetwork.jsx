import React from "react";
import style from "./SocialNetwork.module.css"
import * as axios from "axios";

class SocialNetwork extends React.Component {

    // constructor официально не является методом жизненного цикла,
    // но по сути, он говорит, что компонент сконструировался.
    // Компонент, при переходе на другую страницу стирается из памяти,
    // но пока действия происходят на этой странице, то только повторно вызывется рендер(),
    // конструктор запускается только один раз при заходе на эту страницу.
    // constructor(props) {
    //     super(props);
    // }

    //обращаемся к методу componentDidMount и наполняем своими инструкциями

    componentDidMount() {
        let countRequest = "count=" + this.props.pageSize;
        let pageRequest = "page=" + this.props.currentPage;
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users?" + countRequest + "&" + pageRequest).then(response => {
                this.props.setUsers(response.data.items);
            });
        }
        ;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsersCount(response.data.totalCount)
        });
    }

    // Создаем свой метод на клик по страничкам
    onPagesClick = (page) => {
        this.props.setCurrentPage(page);

        let countRequest = "count=" + this.props.pageSize;
        let pageRequest = "page=" + page; // здесь берем page тк setCurrentPage еще не долетел до стора, а мы уже делаем запрос
        axios.get("https://social-network.samuraijs.com/api/1.0/users?" + countRequest + "&" + pageRequest).then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        let setUsers = this.props.users.map(u => {
            let unmark = () => {
                this.props.unmark(u.id)
            };
            let mark = () => {
                this.props.mark(u.id)
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount && i <= 10; i++) {
            pages.push(i)
        }

        // let onPagesClick = (e) => {
        //     let currentPage = Number(e.target.textContent);
        //     this.props.setCurrentPage(currentPage);
        // }

        let setPages = pages.map(page => {
            return (
                <span
                    className={(page === this.props.currentPage) ? style.pageSelected : ''}
                    // onClick={(page !== this.props.currentPage) && onPagesClick}> это короткая,
                    // но не совсем корректная запись однократного условия, правильнее писать так, как ниже
                    onClick={(page !== this.props.currentPage) ? () => {this.onPagesClick(page)} : undefined}
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
}

export default SocialNetwork;
