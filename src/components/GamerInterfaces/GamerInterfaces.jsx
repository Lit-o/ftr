import style from './GamerInterfaces.module.css'
import History from "./History/History";

const GamerInterfaces = () => {
    return (
        <div className={style.main}>
            <h1>Gamer Interfaces</h1>
            <History />


            <div className='visuallyHidden'>
                <p>Relax stuff</p>
                <button>Skateboarding</button>
                <button>Chilling on the roof</button>
                <button>Walking</button>
            </div>


        </div>
    )
}

export default GamerInterfaces