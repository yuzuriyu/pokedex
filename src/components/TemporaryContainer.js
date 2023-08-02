import pokeballWhite from '../images/pokeball--white.png';

const TemporaryContainer = () => {
    return (
       <div className="temporary-container">
        <img src={pokeballWhite} alt="pokeball"/>
        <p>Select a Pokemon.</p>
      </div>
    )
}

export default TemporaryContainer;