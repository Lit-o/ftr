import style from './History.module.css'
import HistoryPost from "./HistoryPost/HistoryPost";
import React from "react";
import {Redirect} from "react-router-dom";


const History = (props) => {
    let historyPosts = props.historyPage.stories.map((el) =>
        <HistoryPost
            story={el.story}
            time={el.time}
            date={el.date}
            id={el.id}
            key={el.id}/>)

    // так работает редирект
    if (props.isModuleDisable) return <Redirect to={"/nf010722"}/>
    return (
        <div className={style.main}>
            <h2>Your History</h2>
            {historyPosts}
        </div>
    )
}

export default History;