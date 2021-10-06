import style from './Character.module.css'


const Character = (props) => {

    let thoughtsData = [
        {id: 1, thought: "I'm awake. Let's go!"},
        {id: 2, thought: "Maybe do something?!!!!"},
        {id: 3, thought: "I feel hungry. I should go to the grocery store or order a pizza"}
    ]

    // let thoughtsResult = thoughtsData.map((el) => {
    //         return (
    //             <p>{el.thought}</p>
    //         )
    //     }
    // )
    let thoughtsResult = thoughtsData.map((el) =>  <p id={el.id}>{el.thought}</p>)

    return (
        <div className={style.main}>
            <h2>Character</h2>

            <div className={style.charAttributes}>
                <h3>Character attributes</h3>
                <p>Agility : 5 </p>
                <p>Strength : 5 </p>
                <p>Intelligence: 5</p>
                <p>Luck : 5 </p>
            </div>


            <div className={style.charThoughts}>
                <h3>My thoughts:</h3>
                <div>
                    <textarea name="" id=""></textarea>
                    <br/>
                    <button>Add thought</button>
                </div>
                <br/>
                {thoughtsResult}
            </div>
        </div>
    )
}

export default Character;