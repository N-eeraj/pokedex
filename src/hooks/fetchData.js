const useFetch = async url => {
    const response = await fetch(url)
    return await response.json()
}

const getEvolutionChain = evolutionChain => {
    const chain = {}
    chain.name = evolutionChain.species.name
    chain.evolvesTo = evolutionChain.evolves_to.map(evolution => getEvolutionChain(evolution))
    return chain
}

export const fetchPokemonList = async offset => await useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`)

export const fetchDetails = async pokemon => {
    const data = await useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const image = `https://img.pokemondb.net/sprites/home/normal/${pokemon}.png`
    return {
        image,
        ...data
    }
}

export const fetchEvolutionData = async pokemon => {
    const species = await useFetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    const data = await useFetch(species.evolution_chain.url)
    const evolutionChain = getEvolutionChain(data.chain)
    return evolutionChain
}