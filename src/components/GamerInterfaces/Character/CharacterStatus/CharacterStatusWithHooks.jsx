import style from "../Character.module.css";
import React, {useEffect, useState} from "react";


const CharacterStatusWithHooks = (props) => {

    let [editMode, setEditModeHook] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditModeHook(true)
    }
    const deactivateEditMode = () => {
        setEditModeHook(false);
        props.updateStatus(status)
    }
    let onEnterPress = (event) => {
        if(event.key === 'Enter'){
            deactivateEditMode()
        }
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    let hasError = false
    return (
        <div className={style.status + " " + (hasError ? style.error : "")}>
            <h3>Status</h3>
            {/*Короткая запись одинарного условия и одинарного следствия  "короткий цикл вычисления"*/}
            {!editMode &&
            <div>
                <p onClick={activateEditMode} >{props.status}</p>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={'true'}
                       onBlur={deactivateEditMode}
                       onKeyPress={onEnterPress}
                       onChange={onStatusChange}
                       type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
}
//I don't want to set the world on fire

export default CharacterStatusWithHooks;