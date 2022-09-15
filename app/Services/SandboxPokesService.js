import { appState } from "../AppState.js";
import { SandboxPoke } from "../Models/SandboxPoke.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxPokesService {
  // async togglePokemon(id) {
  //   const pokemons = appState.myPokemons.find((m) => m.id == id);
  //   if (!pokemons) {
  //     throw new Error("bad id");
  //   }
  //   pokemons.is_default = !pokemons.is_default;
  //   await SandboxServer.put(`/api/${appState.user}/pokemon/${id}`, pokemons);
  //   appState.emit("myPokemons");
  // }
  async deletePokemon(id) {
    // @ts-ignore
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`);
    appState.myPokemons = appState.myPokemons.filter((m) => m.id != id);
  }
  async addMyPokemon() {
    if (!appState.activePokemon) {
      return;
    }
    const alreadyCaught = appState.myPokemons.find(
      (m) => m.name == appState.activePokemon.name
    );
    if (alreadyCaught) {
      throw new Error("you already have this pokemon 🙌");
    }
    const res = await SandboxServer.post(
      `/api/${appState.user}/pokemon`,
      appState.activePokemon
    );
    const newPokemon = new SandboxPoke(res.data);
    appState.myPokemons = [...appState.myPokemons, newPokemon];
  }
  async getMyPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`);
    appState.myPokemons = res.data.map((m) => new SandboxPoke(m));
  }
}
export const sandboxPokesService = new SandboxPokesService();
