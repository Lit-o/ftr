import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink className={style.link} to="/character" activeClassName={style.active}>Character</NavLink></li>
                <li><NavLink className={`${style.link} ${style.inProgress}`} to="/inventory" activeClassName={style.active} >Inventory</NavLink></li>
                <li><NavLink className={style.link} to="/actions" activeClassName={style.active}>Actions</NavLink></li>
                <li><NavLink className={`${style.link} ${style.inProgress}`} to="/shops" activeClassName={style.active}>Shops</NavLink></li>
                <li><NavLink className={`${style.link} ${style.inProgress}`} to="/investitions" activeClassName={style.active}>Investitions</NavLink></li>
                <li><NavLink className={`${style.link} ${style.inProgress}`} to="/social" activeClassName={style.active}>City Social Network</NavLink></li>
                <li><NavLink className={style.link} to="/history" activeClassName={style.active}>Your History</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav
