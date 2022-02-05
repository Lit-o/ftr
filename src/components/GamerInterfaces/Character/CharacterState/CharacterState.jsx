import style from "../Character.module.css";
import React from "react";


const CharacterState = (props) => {



    return (
        <div className={style.hitPoints}>
            <h3>State</h3>
            <p>Health Points Capacity : {props.stateData.HP.capacityHP}</p>
            <p>Health Points Current : {props.stateData.HP.currentHP}</p>
            <br/>
            {/* todo: Energy and Motivation depend on Health */}
            <p>Energy Points Capacity : {props.stateData.energy.capacityEnergy}</p>
            <p>Energy Points Current : {props.stateData.energy.currentEnergy}</p>
            <br/>
            <p>Motivation Points Capacity : {props.stateData.motivation.capacityMotivation}</p>
            <p>Motivation Points Current : {props.stateData.motivation.currentMotivation}</p>
        </div>
    )
}

export default CharacterState;