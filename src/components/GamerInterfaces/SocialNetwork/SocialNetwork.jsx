import React from "react";
import style from "./SocialNetwork.module.css"
import * as axios from "axios";


// if (props.users.length === 0) {
//     props.setUsers([
//         {
//             id: 0,
//             name: 'Zero-User',
//             status: 'Access denied',
//             isHaveJob: false,
//             isMarked: false,
//             avaURL: null
//         },
//         {
//             id: 1,
//             name: 'First-User',
//             status: 'Workers required',
//             isHaveJob: true,
//             isMarked: true,
//             avaURL: null
//         },
//     ])
// }


class SocialNetwork extends React.Component {

    // constructor официально не является методом жизненного цикла,
    // но по сути, он говорит, что компонент сконструировался.
    // Компонент, при переходе на другую страницу стирается из памяти,
    // но пока действия происходят на этой странице, то только повторно вызывется рендер(),
    // конструктор запускается только один раз при заходе на эту страницу.
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
        alert('new');
    }

    render() {
        // создаем массив, с помощью цикла for и метода push высчитав pagesCount,
        // потом уже в рендере создаем массив с разметкой используя map()
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount && i <= 15; i++) {
            pages.push(i)
        }
        console.log(pages)
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
        let setPages = pages.map(page => {
            return (
                <span className={(page === this.props.currentPage) ? style.pageSelected : ''}>{page}</span>
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
