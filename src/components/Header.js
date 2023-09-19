import pokeballIcon from '../images/icon--pokeball--colored.png';
import pokeballIconBlack from '../images/pokeball--black.png';

const Header = () => {
    return (
        <div className="header__div">
            <div className='header__div--left'>
                <h1>Pokedex</h1>
                <div className="header__div--caught">
                    <img src={pokeballIcon} alt="pokeball icon" />
                    <p>quantity</p>
                </div>
                <div className="header__div--uncaught">
                    <img src={pokeballIconBlack} alt="pokeball black" />
                    <p>quantity</p>
                </div>
            </div>
            <div className="header__div--right">
                <p>A - Z</p>
            </div>
        </div>
    )
}

export default Header;