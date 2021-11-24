import style from "../Character.module.css";
import React from "react";


const CharacterState = (props) => {



    return (
        <div className={style.hitPoints}>
            <h3>State</h3>
            <p>Hit Points Capacity : {props.stateData.HP.capacityHP}</p>
            <p>Hit Points Current : {props.stateData.HP.currentHP}</p>
            <br/>
            <p>Energy Points Capacity : {props.stateData.energy.capacityEnergy}</p>
            <p>Energy Points Current : {props.stateData.energy.currentEnergy}</p>
            <br/>
            <p>Motivation Points Capacity : {props.stateData.motivation.capacityMotivation}</p>
            <p>Motivation Points Current : {props.stateData.motivation.currentMotivation}</p>
        </div>
    )
}

export default CharacterState;