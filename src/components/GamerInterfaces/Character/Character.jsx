import style from './Character.module.css'
import React from "react";
import CharacterStatus from "./CharacterStatus/CharacterStatus";

const Character = (props) => {
    let thoughtsResult = props.dataToCharacter.thoughts.map((el) =>  <p id={el.id} key={el.key}>{el.thought}</p>)
    let thoughtsTextarea = React.createRef()

    let sendThought = () => {
        props.sendThought()
    }

    let sendTextarea = (e) => {
        // let text = thoughtsTextarea.current.value;
        // --- отказываемся от ref thoughtsTextarea в пользу e (event)
        // ref всегда лучше избегать, сам Реакт об этом говорит
        let text = e.target.value;
        props.changeTextarea(text);
    }

    const aquaStyle = {
        fontWeight: 700,
        paddingTop: '10px',
    };

    return (
        <div className={style.main}>
            <h2>Character</h2>
            <CharacterStatus status={"I don't want to set the world on fire"}/>
            <div className={style.charAttributes}>
                <h3>Character attributes</h3>
                <p>Agility : {props.dataToCharacter.characteristics.agility} </p>
                <p>Strength : {props.dataToCharacter.characteristics.strength} </p>
                <p>Intelligence : {props.dataToCharacter.characteristics.intelligence} </p>
                <p style={aquaStyle}>Free Char Points : {props.dataToCharacter.characteristics.freeCharPoints} </p>
            </div>

            <div className={style.hitPoints}>
                <h3>Character state</h3>
                <p>Hit Points Capacity : {props.dataToCharacter.HP.capacityHP}</p>
                <p>Hit Points Current : {props.dataToCharacter.HP.currentHP}</p>
            </div>

            <div className={style.charThoughts}>
                <h3>My thoughts:</h3>
                <div>
                    <textarea name="" ref={thoughtsTextarea} value={props.dataToCharacter.textarea} onChange={sendTextarea}/>
                    <br/>
                    <button onClick={sendThought} data-tooltip='Come on! Click it!!!' className={style.addThought}>Add thought</button>
                </div>
                <br/>
                {thoughtsResult}
            </div>
        </div>
    )
}

export default Character;