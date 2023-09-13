import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []); 

  return (
    <div className="App">
      <ul>
        {pokemonList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
