import { PokemonDetail } from "./PokemonDetail.js";

export class SandboxPoke extends PokemonDetail {
  constructor(data) {
    super(data);
    this.is_default = data.is_default;
  }

  get SandboxListTemplate() {
    return /*html*/ `
    
    <div class="d-flex align-content-center justify-content-between
    " on>
    <input type="checkbox" ${this.is_default ? 'checked' : ''} onchange="app.sandboxPokesController.togglePokemon('${this.id}')">
    <span class="fs-3 text-center selectable no-select" >
    ${this.name}
    </span>
    <i class="mdi mdi-delete-forever d-flex justify-content-center align-items-center" onclick="app.sandboxPokesController.deletePokemon('${this.id}')"></i>
    </div>
    
    
    
    `;
  }
}
