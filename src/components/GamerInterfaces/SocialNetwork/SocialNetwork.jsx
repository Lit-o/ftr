import style from "./SocialNetwork.module.css"


const SocialNetwork = (props) => {

    let setUsers = props.users.map(u => {
        let unmark = () => {props.unmark(u.id)};
        let mark = () => {props.mark(u.id)};
        return (
            <div className={style.userCard} key={u.id}>
                <img src={u.avaURL} alt="avatar"/>
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