import style from './HistoryPost.module.css'

const HistoryPost = (props) => {
    return (
        <div className={style.main}>
            <time>{props.time}</time>
            <p>{props.story}</p>
            {/*<button>Special Mark for this story</button>*/}
            <div className={style.favouritesSection}>
                <button>Add to favourites</button>
                <div className={style.isFavourite}></div>
            </div>
            <div className={style.share}>
                <button>Share</button>
            </div>
        </div>
    )
}

export default HistoryPost;