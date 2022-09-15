export class PokemonDetail {
  constructor(data) {
    this.id = data.id;
    this.img = data.img || data.sprites.other["official-artwork"].front_default;
    this.name = data.name;
    this.weight = data.weight;
    this.height = data.height;
    this.is_default = data.is_default;
  }

  get PokemonDetailCard() {
    return /*html*/ `
        <div class="card m-5">
          <img src="${this.img}" class="card-img-top" alt="${this.name}" />
          <div class="card-body text-center">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">height: ${this.height} | weight: ${this.weight}</p>
            <p class="card-text">
              <small class="text-muted"></small>
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary" onclick="app.sandboxPokesController.addMyPokemon()">catch</button>
          </div>
        </div>
    
    
    
    
    `;
  }
}
