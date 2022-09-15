import { appState } from "../AppState.js";
import { sandboxPokesService } from "../Services/SandboxPokesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSandboxPokes() {
  let template = "";
  appState.myPokemons.forEach((m) => (template += m.SandboxListTemplate));
  setHTML("sandboxList", template);
}

export class SandboxPokesController {
  constructor() {
    this.getMyPokemon();
    appState.on("myPokemons", _drawSandboxPokes);
  }

  
  // <!--NOTE this doesnt work because the api doesnt accept booleans-->
  // async togglePokemon(id){
  //   try {
  //     await sandboxPokesService.togglePokemon(id)
  //   } catch (error) {
  //     console.error('[togglePokemon]',error)
  //     Pop.error(error)
  //   }
  // }

  async deletePokemon(id){
    try {
      const yes = await Pop.confirm('Let this pokemon go?', "you'll have to catch it again")
      if (!yes) {
        return
      }
      await sandboxPokesService.deletePokemon(id)
    } catch (error) {
      console.error('[deletePokemon]', error)
      Pop.error(error)
    }
  }

  async addMyPokemon() {
    try {
      await sandboxPokesService.addMyPokemon();
    } catch (error) {
      console.error("[addMyPokemon]", error);
      Pop.error(error);
    }
  }

  async getMyPokemon() {
    try {
      await sandboxPokesService.getMyPokemon();
    } catch (error) {
      console.error("[getMyPokemon]", error);
      Pop.error(error);
    }
  }
}
