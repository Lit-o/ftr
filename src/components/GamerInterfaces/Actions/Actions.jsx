import style from './Actions.module.css'

const Actions = (props) => {
    return (
        <div className={style.main}>
            <p>Relax stuff</p>
            <button>Skateboarding</button>
            <button>Chilling on the roof</button>
            <button>Walking</button>
        </div>
    )
}

export default Actions;