import { Reducer, Action } from "redux";
import {
  PokemonDisoatchTypes,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../actions/PokemonActionType";

interface DefaultState {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: DefaultState = {
  loading: false,
};

export const pokemonReducer: Reducer<DefaultState, Action> = (
  state = defaultState,
  action: PokemonDisoatchTypes
) => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
