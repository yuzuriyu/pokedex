const Search = (props) => {
    return (
        <div className="search-container">
            <h1>Pokédex</h1>
            <input type="text" placeholder="search" onChange={props.handleChange} value={props.searchInput} className="search-bar"/>
          </div>
    )
}

export default Search;