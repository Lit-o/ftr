import style from './GamerInterfaces.module.css'
import History from "./History/History";
import Character from "./Character/Character";

const GamerInterfaces = () => {
    return (
        <div className={style.main}>
            <h1>Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <History />
                <Character />


                <div >
                    <p>Relax stuff</p>
                    <button>Skateboarding</button>
                    <button>Chilling on the roof</button>
                    <button>Walking</button>
                </div>
            </div>


        </div>
    )
}

export default GamerInterfaces