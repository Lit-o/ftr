import style from './GamerInterfaces.module.css'
import {Route} from "react-router-dom";
import Actions from "./Actions/Actions";
import CharacterContainer from "./Character/CharacterContainer";
import HistoryContainer from "./History/HistoryContainer";
import SocialNetworkContainer from "./SocialNetwork/SocialNetworkContainer";
import NotFound from "../NotFound/NotFound";
import InventoryContainer from "./Inventory/InventoryContainer";
import ShopsContainer from "./Shops/ShopsContainer";
import InvestmentsContainer from "./Investments/InvestmentsContainer";



const GamerInterfaces = () => {

    let Character = () => <CharacterContainer/>
    let History = () => <HistoryContainer/>
    let Social = () => <SocialNetworkContainer/>
    let NF010722 = () => <NotFound />
    let Inventory = () => <InventoryContainer />
    let Shops = () => <ShopsContainer />
    let Investments = () => <InvestmentsContainer />



    return (
        <div className={style.main}>
            <h1 className="visuallyHidden">Gamer Interfaces</h1>
            <div className={style.flexCont}>
                <Route render={Character} exact path="/character"/>
                <Route render={Inventory} exact path="/Inventory"/>
                <Route component={Actions} exact path="/actions"/>
                <Route render={Shops} exact path="/shops"/>
                <Route render={Investments} exact path="/investments"/>
                <Route render={Social} exact path="/social/:userId?"/>
                <Route render={History} exact path="/history"/>
                <Route render={NF010722} exact path="/nf010722"/>
            </div>
        </div>
    )
}

export default GamerInterfaces