import style from './Character.module.css'
import React from "react";
import CharacterStatusWithHooks from "./CharacterStatus/CharacterStatusWithHooks";
import CharacterAttributes from "./CharacterAttributes/CharacterAttributes";
import CharacterState from "./CharacterState/CharacterState";

const Character = (props) => {
    let thoughtsResult = props.dataToCharacter.thoughts.map((el) => <p id={el.id} key={el.key}>{el.thought}</p>)
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

    return (
        <div className={style.main}>
            <h2 className="visuallyHidden">Character</h2>

            <CharacterStatusWithHooks status={props.dataToCharacter.status} updateStatus={props.updateStatus}/>
            <CharacterAttributes attributesData={props.dataToCharacter.characteristics}/>
            <CharacterState stateData={props.dataToCharacter.characterState}/>

            <div className={style.charThoughts}>
                <h3>My thoughts:</h3>
                <div>
                    <textarea name="" ref={thoughtsTextarea} value={props.dataToCharacter.textarea}
                              onChange={sendTextarea}/>
                    <br/>
                    <button onClick={sendThought} data-tooltip='Come on! Click it!!!' className={style.addThought}>Add
                        thought
                    </button>
                </div>
                <br/>
                {thoughtsResult}
            </div>
        </div>
    )
}

export default Character;