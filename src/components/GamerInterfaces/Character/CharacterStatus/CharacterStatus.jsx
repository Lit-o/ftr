import style from "../Character.module.css";
import React from "react";

class CharacterStatus extends React.Component {
    state = {
        editMode: false
    }

    //специально объявил метод в двух видах ради учебных целей
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div className={style.status}>
                <h3>Status</h3>
                {/*Короткая запись одинарного условия и одинарного следствия*/}
                {!this.state.editMode &&
                    <div>
                        <p onClick={this.activateEditMode}>{this.props.status}</p>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={'true'} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

//I don't want to set the world on fire

export default CharacterStatus;