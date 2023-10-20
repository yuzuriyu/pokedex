import pokeballIcon from '../images/icon--pokeball--colored.png';
import searchIcon from '../images/icon--search--mobile.png';
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
                        src={searchIcon} 
                        alt='search for mobile' 
                        onClick={() => handleToggleMenu()} 
                    />
                </div>
                <div className="header__div--caught">
                    <img src={pokeballIcon} alt="pokeball icon" />
                    <p>{discoveryNum}</p>
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