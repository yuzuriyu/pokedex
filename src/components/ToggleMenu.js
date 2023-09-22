const ToggleMenu = (props) => {
    console.log(props)
    return (
        <div className='toggle-menu__div'>
            <div className="toggle-menu__div--search">
                <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={props.handleChange} 
                    value={props.searchInput}
                />
            </div>
        </div>
    )
}

export default ToggleMenu;