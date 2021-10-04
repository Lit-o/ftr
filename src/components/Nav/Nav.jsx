import style from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><a href="">Characteristics</a></li>
                <li><a href="">Actions</a></li>
                <li><a href="">Some Chill</a></li>
                <li><a href="">Investitions</a></li>
                <li><a href="">Your History</a></li>
            </ul>
        </nav>
    )
}
export default Nav
