import style from './HistoryPost.module.css'

const HistoryPost = () => {
    return (
        <div className={style.main}>
            <p>Your first day begin</p>
            {/*<button>Special Mark for this story</button>*/}
            <button>Add to favourites</button>
            <button>Add comment</button>
        </div>
    )
}

export default HistoryPost;