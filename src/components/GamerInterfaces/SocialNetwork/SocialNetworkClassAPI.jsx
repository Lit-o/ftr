import React from "react";
import SocialNetwork from "./SocialNetwork";
import {socialAPI} from "../../../api/api";

class SocialNetworkClassAPI extends React.Component {

    // constructor официально не является методом жизненного цикла,
    // но по сути, он говорит, что компонент сконструировался.
    // Компонент, при переходе на другую страницу стирается из памяти,
    // но пока действия происходят на этой странице, то только повторно вызывется рендер(),
    // конструктор запускается только один раз при заходе на эту страницу.
    // constructor(props) {
    //     super(props);
    // }
    // даем инструкции на событие - компонента вмонтирована
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            socialAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
        }

        socialAPI.getUsersCount().then(data => {
            this.props.setUsersCount(data.totalCount)
        });
    }

    // Создаем свой метод на клик по страничкам
    onPagesClick = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
                                           // здесь берем page тк setCurrentPage еще не долетел до стора, а мы уже делаем запрос
        socialAPI.getUsers(this.props.pageSize, page).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        // if (this.props.isFetching) {
        //     return <Preloader />
        // }
        return (
            <>
                <SocialNetwork
                    mark={this.props.mark}
                    unmark={this.props.unmark}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                    followingQueue={this.props.followingQueue}
                    isInFollowingQueue={this.props.isInFollowingQueue}
                    onPagesClick={this.onPagesClick}/>
            </>
        )
    }
}

export default SocialNetworkClassAPI;
