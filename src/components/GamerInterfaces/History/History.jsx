import style from './History.module.css'
import HistoryPost from "./HistoryPost/HistoryPost";


const History = () => {
    return (
        <div className={style.main}>
            <h2>Your History</h2>
            <HistoryPost story='Your first day begin' time='00 am // 01.05.2255'/>
            <HistoryPost story='You are woke up' time='07 am // 01.05.2255'/>
            <HistoryPost story='you had breakfast' time='07.30 am // 01.05.2255'/>
            <HistoryPost story='Nothing special happened' time='08.00 am // 01.05.2255'/>
        </div>
    )
}

export default History;