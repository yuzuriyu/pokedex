const Search = (props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder="search" onChange={props.handleChange} value={props.searchInput} className="search-bar"/>
          </div>
    )
}

export default Search;