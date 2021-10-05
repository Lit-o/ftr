import style from './History.module.css'
import HistoryPost from "./HistoryPost/HistoryPost";


const History = () => {
    return (
        <div className={style.main}>
            <h2>Your History</h2>
            <HistoryPost message='Your first day begin' time='00 am // 01.05.2255'/>
            <HistoryPost message='You are woke up' time='07 am // 01.05.2255'/>
            <HistoryPost message='you had breakfast' time='07.30 am // 01.05.2255'/>
            <HistoryPost message='Nothing special happened' time='08.00 am // 01.05.2255'/>
        </div>
    )
}

export default History;