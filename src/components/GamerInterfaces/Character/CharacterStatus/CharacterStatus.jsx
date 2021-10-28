import style from "../Character.module.css";
import React from "react";

class CharacterStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    onEnterPress = (event) => {
        if(event.key === 'Enter'){
            this.deactivateEditMode()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {
                    status: this.props.status
                }
            )
        }

        console.log("c did update")
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
                    <input autoFocus={'true'}
                           onBlur={this.deactivateEditMode.bind(this)}
                           onKeyPress={this.onEnterPress}
                           onChange={this.onStatusChange}
                           type="text"
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

//I don't want to set the world on fire

export default CharacterStatus;