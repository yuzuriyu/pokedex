import pokeballWhite from '../images/pokeball--white.png';


const PokemonDetails = (props) => {
  console.log(props)
    return (
        <div className="pokemon-details__div">
          <div className='pokemon-details__div--top-most'>
            <div className="pokemon-details__div--icon-no">
              <img 
                src={props.selectedPokemon.sprites.front_default}
                alt="pokemon sprite"
              />
                <h1>No. {props.selectedPokemon.id}</h1>
              </div>
              <h1>{props.selectedPokemon.name}</h1>
                <img 
                  className="pokeball--black" 
                  src={pokeballWhite}
                  alt="pokeball--black" 
                />
          </div>
          <div className='pokemon-details__div--wrapper'>
            <img src={props.selectedPokemon.sprites.front_default} alt='sprite' />
          </div>
          <div className='pokemon-details__div--details'>
            <div className='pokemon-details__div--left'>
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className='pokemon-details__div--right'>
              <p>Grass</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
          </div>
          <div className='pokemon-details__div--stats'>
            <div className='pokemon-details__div--stat'>
              <p>Hp</p>
              <p>100</p>
            </div>
            <div className='pokemon-details__div--stat'>
              <p>Hp</p>
              <p>100</p>
            </div>
            <div className='pokemon-details__div--stat'>
              <p>Hp</p>
              <p>100</p>
            </div>
          </div>
      </div>
    )
}

export default PokemonDetails;