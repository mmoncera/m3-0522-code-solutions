import React from 'react';
import ReactDOM from 'react-dom/client';

function PokemonList(props) {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];
  const pokedexItems = pokedex.map(({ number, name }) => (
    <li key={number}>{name}</li>
  ));
  return <ul>{pokedexItems}</ul>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PokemonList />);
