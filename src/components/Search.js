const Search = (props) => {
    return (
        <input type="text" placeholder="Search" onChange={props.handleChange} value={props.searchInput} className="search-bar"/>
    )
}

export default Search;