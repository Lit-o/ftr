import style from './Character.module.css'


const Character = (props) => {
debugger;
console.log(props)

    return (
        <div className={style.main}>
            <h2>Character</h2>

            <div className={style.charAttributes}>
                <h3>Character attributes</h3>
                <p>Agility : 5 </p>
                <p>Strength : 5 </p>
                <p>Intelligence: 5</p>
                <p>Luck : 5 </p>
            </div>


            <div className={style.charThoughts}>
                <h3>My thoughts:</h3>
                <div>
                    <textarea name="" id=""></textarea>
                    <br/>
                    <button>Add thought</button>
                </div>
                <br/>
                {props.thoughtsArray}
            </div>
        </div>
    )
}

export default Character;