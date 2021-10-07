import style from './GamerInterfaces.module.css'
import History from "./History/History";
import Character from "./Character/Character";
import {BrowserRouter, Route} from "react-router-dom";
import Actions from "./Actions/Actions";



const GamerInterfaces = (props) => {
    let Char = () => <Character thoughtsArray={props.dataToChar} addThought={props.addThought}/>
    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <Route render={Char} exact path="/character"/>
                <Route component={Actions} exact path="/actions"/>
                <Route component={History} exact path="/history"/>
            </div>
        </div>
    )
}

export default GamerInterfaces