import style from './GamerInterfaces.module.css'
import {Route} from "react-router-dom";
import Actions from "./Actions/Actions";
import CharacterContainer from "./Character/CharacterContainer";
import HistoryContainer from "./History/HistoryContainer";
import SocialNetworkContainer from "./SocialNetwork/SocialNetworkContainer";



const GamerInterfaces = () => {

    let Character = () => <CharacterContainer/>
    let History = () => <HistoryContainer/>
    let Social = () => <SocialNetworkContainer/>

    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <Route render={Character} exact path="/character"/>
                <Route component={Actions} exact path="/actions"/>
                <Route render={Social} exact path="/social/:userId?"/>
                <Route render={History} exact path="/history"/>
            </div>
        </div>
    )
}

export default GamerInterfaces