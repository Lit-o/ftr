import React from "react";
import SocialNetwork from "./SocialNetwork";
import {Redirect} from "react-router-dom";
import ShopsWithDisableComponent from "../Shops/Shops";
import {withModuleDisable} from "../../../hoc/withModuleDisable";

class SocialNetworkClassAPI extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
        }
        this.props.getUsersCountThunkCreator()
    }

    // Создаем свой метод на клик по страничкам
    onPagesClick = (page) => {
        this.props.setCurrentPage(page);
        // здесь берем page тк setCurrentPage еще не долетел до стора, а мы уже делаем запрос
        this.props.getUsersThunkCreator(this.props.pageSize, page)
    }

    render() {
        if (this.props.isModuleDisable) return <Redirect to={"/nf010722"}/>

        return (
            <>
                <SocialNetwork
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                    followingQueue={this.props.followingQueue}
                    unmarkThunkCreator={this.props.unmarkThunkCreator}
                    markThunkCreator={this.props.markThunkCreator}
                    onPagesClick={this.onPagesClick}/>
            </>
        )
    }
}

// let SocialNetworkClassAPIWithDisableComponent = withModuleDisable(SocialNetworkClassAPI) HOC отключающий модуль с редиректом
let SocialNetworkClassAPIWithDisableComponent = SocialNetworkClassAPI


export default SocialNetworkClassAPIWithDisableComponent;
