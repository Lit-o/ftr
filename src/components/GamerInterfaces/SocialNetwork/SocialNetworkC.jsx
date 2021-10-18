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


class SocialNetworkC extends React.Component {


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

        return (
            <div className={style.main}>
                <h1 className="visuallyHidden">Social Network</h1>
                {setUsers}
            </div>
        )
    }
}

