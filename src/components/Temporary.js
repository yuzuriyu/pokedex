import pokedexIcon from '../images/icon--pokedex.png';

const Temporary = () => {
    return (
        <div className="temporary__div">
            <img src={pokedexIcon} alt='pokedex' />
            <p>select a pokemon...</p>
        </div>
    )
}

export default Temporary;