const Inventory = (props) => {
    return (
        <div>
            <h2>Inventory</h2>
            <p>Expected time of recovery work : {props.inventoryPage.moduleRecoveryTime}</p>
        </div>
    )
}

export default Inventory;