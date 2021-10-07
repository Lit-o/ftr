import style from './Character.module.css'
import React from "react";



const Character = (props) => {

    let thoughtsResult = props.thoughtsArray.thoughts.map((el) =>  <p id={el.id}>{el.thought}</p>)
    let sendThought = () => {
        debugger;
        let text = thoughtsTextarea.current.value;
        props.addThought(text);
        thoughtsTextarea.current.value = ''
    }
    let thoughtsTextarea = React.createRef()

    return (
        <div className={style.main}>
            <h2>Character</h2>
            <div className={style.charAttributes}>
                <h3>Character attributes</h3>
                <p>Agility : {props.thoughtsArray.characteristics.agility} </p>
                <p>Strength : {props.thoughtsArray.characteristics.strength} </p>
                <p>Intelligence: {props.thoughtsArray.characteristics.intelligence} </p>
                <p>Luck : {props.thoughtsArray.characteristics.luck} </p>
            </div>
            <div className={style.charThoughts}>
                <h3>My thoughts:</h3>
                <div>
                    <textarea name="" ref={thoughtsTextarea}></textarea>
                    <br/>
                    <button onClick={sendThought}>Add thought</button>
                </div>
                <br/>
                {thoughtsResult}
            </div>
        </div>
    )
}

export default Character;