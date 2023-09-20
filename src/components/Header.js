import pokeballIcon from '../images/icon--pokeball--colored.png';
import pokeballIconBlack from '../images/pokeball--black.png';
import Search from './Search';

const Header = (props) => {
    console.log(props)
    const discoveryNum = props.pokeData.length;

    return (
        <div className="header__div">
            <div className='header__div--left'>
                <h1>Pokédex</h1>
                <div className="header__div--caught">
                    <img src={pokeballIcon} alt="pokeball icon" />
                    <p>{discoveryNum}</p>
                </div>
                <div className="header__div--uncaught">
                    <img src={pokeballIconBlack} alt="pokeball black" />
                    <p>0</p>
                </div>
            </div>
            <div className="header__div--right">
                <Search 
                    handleChange={props.handleChange} 
                    searchInput={props.searchInput}
                />
            </div>
        </div>
    )
}

export default Header;