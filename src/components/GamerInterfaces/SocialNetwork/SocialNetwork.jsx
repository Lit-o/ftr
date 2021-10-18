import style from "./SocialNetwork.module.css"


const SocialNetwork = (props) => {
    let setUsers = props.users.map(u => {
        return (
            <div className={style.userCard}>
                <p>{u.name}</p>
                <p>{u.status}</p>
            </div>
        )
    })

    return (
        <div>
            <h1 className={style.main}>Social Network</h1>
            {setUsers}
        </div>
    )
}

export default SocialNetwork;