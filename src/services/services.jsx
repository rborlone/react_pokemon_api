import { consumirServicio } from "../helpers/fetch-helper";

export const getPokemon = async (name) => {
    try {
        const pokemonData = await consumirServicio(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log('pkm', pokemonData)
        return  await pokemonData.json();

    } catch (err) {
       console.log(err)
    }
}