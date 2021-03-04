import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store";
import { GetPokemon } from "./actions/PkemonAciton";
function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };

  console.log("pokemon: ", pokemonState);
  return (
    <div style={{ margin: "20px" }} className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ab) => {
            return <p>{ab.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
