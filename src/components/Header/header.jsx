import style from './Header.module.css'
import logo from "../../assets/pictures/ftr.png";

const Header = () => {
    return (
        <header className={style.App_header}>
            <img src={logo} className={style.App_logo} alt="logo"/>
            <p>
                Future. The journey begins...
            </p>
        </header>
    )
}

export default Header;