import HttpClient from './utils/HttpClient';

class PokemonService {
  constructor() {
    this.httpClient = new HttpClient('https://pokeapi.co/api/v2/');
  }

  async listPokemons({
    queryParams,
  }) {
    return this.httpClient.get(`pokemon/?${queryParams}`);
  }

  async getPokemon({ id }) {
    return this.httpClient.get(`pokemon/${id}`);
  }
}

export default new PokemonService();
