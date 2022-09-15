import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawActivePokemon() {
  if (appState.activePokemon == null) {
    return;
  }
  setHTML("pokemon-detail-card", appState.activePokemon.PokemonDetailCard);
}

export class ActivePokemonController {
  constructor() {
    appState.on("activePokemon", _drawActivePokemon);
  }
}
