import Search from ".//Search";
import circle from '../images/circle.png';
import pokeballBlack from '../images/pokeball--black.png';

const PokemonList = (props) => {
    return (
        <div className="pokemon-list">
          <Search handleChange={props.handleChange} 
            searchInput={props.searchInput}/>
          <div className="pokebox">
            {props.filteredPokemon.map((pokemon => <div className="pokebox__div--main" onClick={() => props.fetchSelectedPokeData(pokemon.name)}>
            <div className="sprite-wrapper">
                <img src={pokemon.spriteUrl} alt="pokemon sprite"/>
              </div>
              <div className="pokebox__div--details">
                <h1>{props.capitalizeFirstLetter(pokemon.name)}</h1>
                <p>No. {pokemon.pokemonID}</p>
              </div>
              <img className="circle" src={circle} alt="circle decoration" />
              <img className="pokeball--black"  src={pokeballBlack} alt="pokeball black"/>
              </div>))}
          </div>
        </div>
    )
}

export default PokemonList;