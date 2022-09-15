import { appState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonList() {
  let template = "";
  appState.pokemons.forEach((p) => (template += p.PokemonListTemplate));
  setHTML("api-pokemon-list", template);
}

export class PokemonsController {
  constructor() {
    this.getPokemons();
    appState.on("pokemons", _drawPokemonList);
  }

  async getPokemonDetails(url) {
    try {
      await pokemonsService.getPokemonDetails(url)
    } catch (error) {
      console.error("[getDetails]", error);
      Pop.error(error);
    }
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons();
    } catch (error) {
      console.error("[getSpells]", error);
      Pop.error(error);
    }
  }
}
