import rayquaza from '../images/hero-banner.jpg';
import pokeballLogo from '../images/pokeball--logo.png';
import pokedex from '../images/pokedex.png';
import pokeheart from '../images/pokeheart.png';
import pokebag from '../images/pokebag.png';

const HeroBanner = () => {
    return(
        <div className="hero-banner">
          <img src={rayquaza} alt="hero banner"/>
          <div className="header">
            <div className="header__div">
              <h1>Pokémon</h1>
              <img src={pokeballLogo} alt=""/>
            </div>
            <button>Login</button>
          </div>
            <h1 className="pokedex">Pokedex</h1>
            <div className="banner-footer">
              <p>"Well, if you just try hard enough, <br/> things will work out. Won't they?" <br/> — Ash</p>
                <div className="social-logos">
                  <img src={pokeheart} alt='pokeheart social link' />
                  <img src={pokebag} alt='pokebag social link'/>
                  <img src={pokedex} alt='pokedex social link'/>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;