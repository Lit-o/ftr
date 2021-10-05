import style from './Character.module.css'

const Character = () => {
    return (
        <div className={style.main}>
            <h2>Character</h2>
            <div className={style.attributesSection}>
                <h3>Character attributes</h3>
                <p>Agility : 5 </p>
                <p>Strength : 5 </p>
                <p>Intelligence: 5</p>
                <p>Luck : 5 </p>
            </div>
            <div>
                <h3>My thoughts:</h3>
                <textarea name="" id="" cols="25" rows="4"></textarea>
                <button>Add thought</button>

            </div>
        </div>
    )
}

export default Character;