import style from './GamerInterfaces.module.css'
import {Route} from "react-router-dom";
import Actions from "./Actions/Actions";
import CharacterContainer from "./Character/CharacterContainer";
import HistoryContainer from "./History/HistoryContainer";



const GamerInterfaces = () => {

    let Character = () => <CharacterContainer/>
    let History = () => <HistoryContainer/>
    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <Route render={Character} exact path="/character"/>
                <Route component={Actions} exact path="/actions"/>
                <Route render={History} exact path="/history"/>
            </div>
        </div>
    )
}

export default GamerInterfaces