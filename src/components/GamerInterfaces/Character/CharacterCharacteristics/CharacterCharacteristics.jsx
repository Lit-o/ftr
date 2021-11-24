import style from "./CharacterCharacteristics.module.css"
import React, {useState} from "react";

const CharacterCharacteristics = (props) => {

    let [editMode, setEditModeHook] = useState(true);

    const aquaStyle = {
        fontWeight: 700,
        paddingTop: '10px',
        paddingBottom: '10px',
    };

    return (
        <div className={style.charCharacteristics}>
            <h3>Сharacteristics</h3>
            <p>Strength : {props.characteristicsData.strength} </p>
            <p>Agility : {props.characteristicsData.agility} </p>
            <p>Perception : {props.characteristicsData.perception} </p>
            <p>Intelligence : {props.characteristicsData.intelligence} </p>
            <p>Charisma : {props.characteristicsData.charisma} </p>

            {/*мне кажется изящное решение, когда в стейте будет 0, !!0 переведет значение в false
             и этот блок не будет отображаться*/}
            {!!props.characteristicsData.freeCharPoints && !editMode &&
                <div className={style.charFreePoints}>
                    <p style={aquaStyle}>Free Char Points : {props.characteristicsData.freeCharPoints} <strong
                        data-tooltip="What the world gave you at birth">?</strong></p>
                    <button>Use points</button>
                </div>
            }
            {!!props.characteristicsData.freeCharPoints && editMode &&
            <div className={style.charFreePoints}>
                <p style={aquaStyle}>Free Char Points : {props.characteristicsData.freeCharPoints} <strong
                    data-tooltip="What the world gave you at birth">?</strong></p>
                <button>Apply</button>
                <button>Reset</button>
            </div>
            }

        </div>
    )
}


export default CharacterCharacteristics;