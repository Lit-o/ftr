import style from "./CharacterCharacteristics.module.css"
import React, {useState} from "react";

const CharacterCharacteristics = (props) => {

    let [editMode, setEditModeHook] = useState(false);
    let [freeCharPoints, setFreeCharPoints] = useState(props.characteristicsData.freeCharPoints)

    const activateEditMode = () => {
        setEditModeHook(true)
    }

    // let strength = (props.characteristicsData.strength).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    function zeroed(number) {
        return (number).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }

    return (
        <div className={style.charCharacteristics}>
            <h3>Сharacteristics</h3>
            <ul className={style.charItems}>
                <li>
                    <div>
                        <p>Strength </p><p>{zeroed(props.characteristicsData.strength)}</p>
                    </div>
                    { editMode && <button>+</button> }
                </li>
                <li>
                    <div>
                        <p>Agility </p><p>{zeroed(props.characteristicsData.agility)}</p>
                    </div>
                    { editMode && <button>+</button> }
                </li>
                <li>
                    <div>
                        <p>Perception </p><p>{zeroed(props.characteristicsData.perception)}</p>
                    </div>
                    { editMode && <button>+</button> }
                </li>
                <li>
                    <div>
                        <p>Intelligence </p><p>{zeroed(props.characteristicsData.intelligence)}</p>
                    </div>
                    { editMode && <button>+</button> }
                </li>
                <li>
                    <div>
                        <p>Charisma </p><p>{zeroed(props.characteristicsData.charisma)}</p>
                    </div>
                    { editMode && <button>+</button> }
                </li>

            </ul>
            {/*мне кажется изящное решение, когда в стейте будет 0, !!0 переведет значение в false
             и этот блок не будет отображаться*/}
            {!!props.characteristicsData.freeCharPoints && !editMode &&
                <div className={style.charFreePoints}>
                    <p style={aquaStyle}>Free Char Points : {freeCharPoints} <strong
                        data-tooltip="What the world gave you at birth">?</strong></p>
                    <button onClick={activateEditMode}>Use points</button>
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


const aquaStyle = {
    fontWeight: 700,
    paddingTop: '10px',
    paddingBottom: '10px',
};


export default CharacterCharacteristics;