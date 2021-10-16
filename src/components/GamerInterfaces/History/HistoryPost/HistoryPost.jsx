import style from './HistoryPost.module.css'

const HistoryPost = (props) => {
    return (
        <div className={style.main} id={props.id} key={props.key}>

            <p>{props.story}</p>
            <time>{props.date}</time>

            <time>{props.time}</time>
            {/*<button>Special Mark for this story</button>*/}
            <div className={style.favouritesSection}>
                <button className={style.isFavourite} data-tooltip='Add to Favourite stories'/>
                <button className={style.isSharing} data-tooltip='Share this story'/>
            </div>

        </div>
    )
}

export default HistoryPost;