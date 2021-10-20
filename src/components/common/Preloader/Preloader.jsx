import style from "./Preloader.module.css";
import React from "react";


const Preloader = () => {
    return (
        <div className={style.loader}>
            <svg>
                <circle cx="50" cy="50" r="40" stroke="aqua" stroke-dasharray="78.5 235.5" stroke-width="3"
                        fill="none"/>
                <circle cx="50" cy="50" r="30" stroke="gold" stroke-dasharray="62.8 188.8" stroke-width="3"
                        fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="aqua" stroke-dasharray="47.1 141.3" stroke-width="3"
                        fill="none"/>
            </svg>
        </div>
    )
}

export default Preloader;