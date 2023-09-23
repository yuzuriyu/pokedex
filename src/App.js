import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import './pokemon-details.css';
import './selected-pokemon.css';
import './no-image-card.css';
import './toggle-menu.css';
import './temporary.css';
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetails";
import SelectedPokemon from "./components/SelectedPokemon";
import Pokebox from "./components/Pokebox";
import Footer from "./components/Footer";
import Temporary from "./components/Temporary";



const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [openDetail, setOpenDetail] = useState(false)

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const results = response.data.results;

        const pokeDatawithSprite = await Promise.all(results.map(async (pokemon) => {
          const spriteResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const spriteUrl = spriteResponse.data.sprites.front_default
          const pokemonID = spriteResponse.data.id;
          const pokemonAbility = spriteResponse.data.abilities
          return {
            ...pokemon, spriteUrl, pokemonID, pokemonAbility
          }
        }));
        setPokeData(pokeDatawithSprite)
      } catch (error) {
        console.error(`error fetching pokemon data`, error);
      }
    };
    fetchPokeData();
  }, []);

  const fetchSelectedPokeData = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setSelectedPokemon(response.data);
    } catch (error) {
      console.log(`couldn't fetch the selected pokemon data`, error);
    }
  };

  const filteredPokemon = pokeData.filter((pokemon) => pokemon.name.includes(searchInput));

  const handleChange = (event) => {
    if(event && event.target) {
      setSearchInput(event.target.value)
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleToggleDetail = () => {
    setOpenDetail(prevStatus => !prevStatus)
  }

  return (
      <div className="app">
        {!openDetail && <Header 
          pokeData={pokeData}
          filteredPokemon={filteredPokemon}
          handleChange={handleChange}
          searchInput={searchInput}
        />}
        <div className="main-container"> 
        {!openDetail && !selectedPokemon &&  <Temporary />}
          {selectedPokemon && !openDetail && (
              <PokemonDetails selectedPokemon={selectedPokemon} />
          )}
         
          {!openDetail && <Pokebox 
            handleChange={handleChange}
            searchInput={searchInput}
            filteredPokemon={filteredPokemon}
            fetchSelectedPokeData={fetchSelectedPokeData}
            capitalizeFirstLetter={capitalizeFirstLetter}
            pokemonID={pokeData.pokemonID}
            handleToggleDetail={handleToggleDetail}
          />}
        </div>
        {openDetail && selectedPokemon && (
          <SelectedPokemon 
            selectedPokemon={selectedPokemon}
            handleToggleDetail={handleToggleDetail}
          />
        )}
        {!openDetail && <Footer />}
      </div>
  )
}

export default App;
