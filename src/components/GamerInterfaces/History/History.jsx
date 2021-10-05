import style from './History.module.css'
import HistoryPost from "./HistoryPost/HistoryPost";


const History = () => {
    return (
        <div className={style.main}>
            <h2>History</h2>
            <HistoryPost/>
            <HistoryPost/>
            <HistoryPost/>
            <HistoryPost/>
        </div>
    )
}

export default History;