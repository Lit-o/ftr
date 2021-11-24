import style from "./CharacterAttributes.module.css"
import React from "react";

const CharacterAttributes = (props) => {


    const aquaStyle = {
        fontWeight: 700,
        paddingTop: '10px',
    };

    return (
        <div className={style.charAttributes}>
            <h3>Attributes</h3>
            <p>Strength : {props.attributesData.strength} </p>
            <p>Agility : {props.attributesData.agility} </p>
            <p>Perception : {props.attributesData.perception} </p>
            <p>Intelligence : {props.attributesData.intelligence} </p>
            <p>Charisma : {props.attributesData.charisma} </p>
            <p style={aquaStyle}>Free Char Points : {props.attributesData.freeCharPoints} <strong
                data-tooltip="What the world gave you at birth">?</strong></p>
        </div>
    )
}

export default CharacterAttributes;