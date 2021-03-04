import { Dispatch } from "redux";
import {
  PokemonDisoatchTypes,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from "./PokemonActionType";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDisoatchTypes>
) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (e) {}
};
