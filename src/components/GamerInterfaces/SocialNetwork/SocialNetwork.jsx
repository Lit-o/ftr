import style from "./SocialNetwork.module.css"
import * as axios from "axios";


const SocialNetwork = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        })
    }
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

    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Social Network</h1>
            {setUsers}
        </div>
    )
}

export default SocialNetwork;