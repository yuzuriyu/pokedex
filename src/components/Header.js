import pokeballIcon from '../images/icon--pokeball--colored.png';
import pokeballIconBlack from '../images/pokeball--black.png';
import menuIcon from '../images/logo--menu.png';
import Search from './Search';
import ToggleMenu from './ToggleMenu';
import { useState } from 'react';



const Header = (props) => {
   
    const discoveryNum = props.pokeData.length;
    const [openToggleMenu, setOpenToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setOpenToggleMenu(prevStatus => !prevStatus)
    }

    return (
        <div className="header__div">
            <div className='header__div--left'>
                <div className='header__div--pokedex'>
                {openToggleMenu && <ToggleMenu
                    handleChange={props.handleChange} 
                    searchInput={props.searchInput}    
                />}
                    <img 
                        src={menuIcon} 
                        alt='menu for mobile' 
                        onClick={() => handleToggleMenu()} 
                    />
                    <h1>Pokédex</h1>
                </div>
                <div className='header__div--discovered'>
                    <div className="header__div--caught">
                        <img src={pokeballIcon} alt="pokeball icon" />
                        <p>{discoveryNum}</p>
                    </div>
                    <div className="header__div--uncaught">
                        <img src={pokeballIconBlack} alt="pokeball black" />
                        <p>0</p>
                    </div>
                </div>
                
            </div>
            <Search 
                handleChange={props.handleChange} 
                searchInput={props.searchInput}
            />
        </div>
    )
}

export default Header;