import style from "./Preloader.module.css";
import React from "react";

const Preloader = () => {
    return (
        <div className={style.loader}>
            <svg>
                {/*strokeDasharray = stroke-dasharray strokeWidth = stroke-width*/}
                <circle cx="50" cy="50" r="40" stroke="aqua" strokeDasharray="78.5 235.5" strokeWidth="3"
                        fill="none"/>
                <circle cx="50" cy="50" r="30" stroke="gold" strokeDasharray="62.8 188.8" strokeWidth="3"
                        fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="aqua" strokeDasharray="47.1 141.3" strokeWidth="3"
                        fill="none"/>
            </svg>
        </div>
    )
}

export default Preloader;