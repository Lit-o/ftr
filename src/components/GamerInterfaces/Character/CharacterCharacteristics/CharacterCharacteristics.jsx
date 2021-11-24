import style from "./CharacterCharacteristics.module.css"
import React from "react";

const CharacterCharacteristics = (props) => {


    const aquaStyle = {
        fontWeight: 700,
        paddingTop: '10px',
    };

    return (
        <div className={style.charAttributes}>
            <h3>Сharacteristics</h3>
            <p>Strength : {props.characteristicsData.strength} </p>
            <p>Agility : {props.characteristicsData.agility} </p>
            <p>Perception : {props.characteristicsData.perception} </p>
            <p>Intelligence : {props.characteristicsData.intelligence} </p>
            <p>Charisma : {props.characteristicsData.charisma} </p>

            {/*мне кажется изящное решение когда в стейте будет 0, !!0 переведет значение в false
             и этот блок не будет отображаться*/}
            {!!props.characteristicsData.freeCharPoints &&
                <div>
                    <p style={aquaStyle}>Free Char Points : {props.characteristicsData.freeCharPoints} <strong
                        data-tooltip="What the world gave you at birth">?</strong></p>

                </div>
            }
        </div>
    )
}

export default CharacterCharacteristics;