import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  user = "daniel";

  /** @type {import('./Models/Pokemon').Pokemon[]} */
  pokemons = [];

  /** @type {import('./Models/SandboxPoke').SandboxPoke[]} */
  myPokemons = [];

  /** @type {import('./Models/PokemonDetail').PokemonDetail | null} */
  activePokemon = null;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
