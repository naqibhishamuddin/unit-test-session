export const getPokemon = async () => {
    const randomNumber = Math.floor(Math.random() * (40 - 1 + 1)) + 1;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        if (response.status === 200) {
            const data = await response.json()
            return data.name
        }
        else {
            throw Error("Something went wrong while fetching your pokemon")
        }
    } catch (error) {
        throw Error("Something went wrong while fetching your pokemon")

    }
}