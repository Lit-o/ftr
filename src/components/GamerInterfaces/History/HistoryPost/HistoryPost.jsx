import style from './HistoryPost.module.css'

const HistoryPost = () => {
    return (
        <div className={style.main}>
            <p>Your first day begin</p>
            {/*<button>Special Mark for this story</button>*/}
            <div className={style.favouritesSection}>
                <button>Add to favourites</button>
                <div className={style.isFavourite}></div>
            </div>
            <div className={style.commentSection}>
                <textarea name="" id="" cols="30" rows="5" className='visuallyHidden'></textarea>
                <button>Add comment</button>
            </div>
        </div>
    )
}

export default HistoryPost;