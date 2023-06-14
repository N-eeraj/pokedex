const useFetch = async url => {
    const response = await fetch(url)
    return await response.json()
}

export const fetchPokemonList = async offset => await useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`)

export const fetchPokemonData = async pokemon => {
    const data = await useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const image = `https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`
    return {
        image,
        ...data
    }
}

export const fetchPokemonSpeciesData = async pokemon => await useFetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)