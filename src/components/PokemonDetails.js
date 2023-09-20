import pokeballWhite from '../images/pokeball--white.png';

const PokemonDetails = (props) => {
  console.log(props.selectedPokemon)

  const typeNames = props.selectedPokemon.types.map((type) =>
    type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
  );

  const statsValue = props.selectedPokemon.stats.map((stats) => stats.base_stat)
  const statsName = props.selectedPokemon.stats.map((stats) => stats.stat.name)

  const hpAttackDefenseValue = statsValue.slice(0, 3)
  const hpAttackDefenseName = statsName.slice(0, 3)

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
              <h1>{props.selectedPokemon.name.charAt(0).toUpperCase() + props.selectedPokemon.name.slice(1)}</h1>
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
              <p>{typeNames.join(', ')}</p>
              <p>{props.selectedPokemon.height} cm</p>
              <p>{props.selectedPokemon.weight} lbs</p>
            </div>
          </div>
          <div className='pokemon-details__div--stats'>
            <div className='pokemon-details__div--stat'>
              <div className='pokemon-details__div--stat-name'>
                {hpAttackDefenseName.map((stats) =>   <p>{stats.charAt(0).toUpperCase() + stats.slice(1)}</p>)}
              </div>
              <div className='pokemon-details__div--stat-value'>
                {hpAttackDefenseValue.map((stats) => <p>{stats}</p>)}
              </div>
            </div>
          </div>
      </div>
    )
}

export default PokemonDetails;