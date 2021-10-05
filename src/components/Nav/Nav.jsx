import style from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="">Character</a></li>
                <li><a href="">Inventory</a></li>
                <li><a href="">Actions</a></li>
                <li><a href="">Shops</a></li>
                <li><a href="">Some Chill (dev test section)</a></li>
                <li><a href="">Investitions</a></li>
                <li><a href="">City Social Network</a></li>
                <li><a href="">Your History</a></li>
            </ul>
        </nav>
    )
}
export default Nav
