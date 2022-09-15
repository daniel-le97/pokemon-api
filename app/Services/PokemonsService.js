import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { PokemonDetail } from "../Models/PokemonDetail.js";
import { PokemonServer } from "./AxiosService.js";

class PokemonsService {
  async getPokemonDetails(url) {
    const res = await PokemonServer.get(url);
    appState.activePokemon = new PokemonDetail(res.data);
  }

  async getPokemons() {
    const res = await PokemonServer.get("/api/v2/pokemon");
    appState.pokemons = res.data.results.map((p) => new Pokemon(p));
  }
}
export const pokemonsService = new PokemonsService();
