import pokeballBlack from '../images/pokeball--black.png';
import pokeballWhite from '../images/pokeball--white.png';

const Pokebox = (props) => {
    return (
        <div className="pokebox__div">
          <div className="pokebox__div--pc">
            {props.filteredPokemon.map((pokemon => <div 
              className="pokebox__div--box" 
              onMouseEnter={() => props.fetchSelectedPokeData(pokemon.name)} 
              onClick={() => props.handleToggleDetail()}
            >
            <div className="pokebox__div--icon-no">
              <img 
                src={pokemon.spriteUrl} 
                alt="pokemon sprite"
              />
                <h1>No. {pokemon.pokemonID}</h1>
              </div>
              <h1>{props.capitalizeFirstLetter(pokemon.name)}</h1>
              
                <img 
                  className="pokeball--black" 
                  src={pokeballBlack} 
                  alt="pokeball--black" 
                />
                <img 
                  className="pokeball--white"  
                  src={pokeballWhite} 
                  alt="pokeball white"
                />
              </div>))}
          </div>
        </div>
    )
}

export default Pokebox;