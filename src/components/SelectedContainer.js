const SelectedContainer = (props) => {
    return (
        <div className="selected-container">
              <div className="selected-pokemon-details">
                <h1>{props.capitalizeFirstLetter(props.selectedName)}</h1>
                <p>No. {props.selectedID}</p>
                <p>Height: {props.selectedHeight}</p>
                <p>Weight: {props.selectedWeight}</p>
                <h3>Abilities:</h3>
                {props.selectedPokemon.abilities.map((abilityData, index) => <li key={index}>{abilityData.ability.name}</li>)}
                <h3>Type: </h3>
                {props.selectedPokemon.types.map((typeData, index) => <li key={index}>{typeData.type.name}</li>)}
              </div>
              <img src={props.selectedPokemon.sprites.front_default} alt="selected-pokemon" />
            </div>
    )
}

export default SelectedContainer;