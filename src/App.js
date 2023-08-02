import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import TemporaryContainer from "./components/TemporaryContainer";
import SelectedContainer from "./components/SelectedContainer";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchInput, setSearchInput] = useState("");

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
    setSearchInput(event.target.value);
  };

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
      <div className="app">
        <HeroBanner />
        <About />
        <div className="main-container"> 
          {!selectedPokemon && <TemporaryContainer />}
          {selectedPokemon && (
            <SelectedContainer 
              selectedName={selectedPokemon.name}
              selectedID={selectedPokemon.id}
              selectedHeight={selectedPokemon.height}
              selectedWeight={selectedPokemon.weight}
              capitalizeFirstLetter={capitalizeFirstLetter}
              selectedPokemon={selectedPokemon}
            />
          )}
          <PokemonList 
            handleChange={handleChange}
            searchInput={searchInput}
            filteredPokemon={filteredPokemon}
            fetchSelectedPokeData={fetchSelectedPokeData}
            capitalizeFirstLetter={capitalizeFirstLetter}
            pokemonID={pokeData.pokemonID}
          />
        </div>
        <Footer />
      </div>
  )
}

export default App;
