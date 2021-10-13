import style from './GamerInterfaces.module.css'
import History from "./History/History";
import {Route} from "react-router-dom";
import Actions from "./Actions/Actions";
import CharacterContainer from "./Character/CharacterContainer";



const GamerInterfaces = (props) => {

    let Character = () => <CharacterContainer/>
    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <Route render={Character} exact path="/character"/>
                <Route component={Actions} exact path="/actions"/>
                <Route component={History} exact path="/history"/>
            </div>
        </div>
    )
}

export default GamerInterfaces