import { PokemonsController } from "./Controllers/pokemonsController.js";
import { ActivePokemonController } from "./Controllers/PokemonsDetailController.js";
import { SandboxPokesController } from "./Controllers/SandboxPokesController.js";


class App {
  pokemonsController = new PokemonsController()

  sandboxPokesController = new SandboxPokesController()

  activePokemonsController = new ActivePokemonController()
}

window["app"] = new App();
