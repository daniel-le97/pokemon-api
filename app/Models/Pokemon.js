export class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  get PokemonListTemplate() {
    return /*html*/ `
    <span class="fs-3 text-center selectable no-select" onclick="app.pokemonsController.getPokemonDetails('${this.url}')">
    ${this.name}
    </span>
    
    
    
    `;
  }
}
