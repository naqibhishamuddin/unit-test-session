import { useState } from "react"
import { getEncryptedMessage, getPokemon, } from "utils"

export const useGoodButton = () => {
    const [pokemonName, setPokemonName] = useState("")
    const [encryptedMessage, setEncryptedMessage] = useState("")

    const onClick = async () => {
        const name = await getPokemon()
        setEncryptedMessage(getEncryptedMessage())
        setPokemonName(name)
    }

    return { onClick, pokemonName, encryptedMessage }
}