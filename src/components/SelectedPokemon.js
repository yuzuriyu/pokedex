import NoImageCard from "./NoImageCard";
import xIcon from '../images/icon--x.png';

const SelectedPokemon = (props) => {
    
    return (
        <div className='selected-pokemon__div'>
            <div className="selected-pokemon__div--main">
                <div className="selected-pokemon__div--left">
                    <img src={props.selectedPokemon.sprites.front_default} alt="pokemon sprite" />
                </div>
                <div className="selected-pokemon__div--right">
                    <img src={xIcon} alt='close button' onClick={() => props.handleToggleDetail()}  />
                    <NoImageCard selectedPokemon={props.selectedPokemon}/>
                </div>
                <button onClick={() => props.handleToggleDetail()}>Close</button>
            </div>
        </div>
        
    )
}

export default SelectedPokemon;