import { useState } from "react"
import { getEncryptedMessage, getPokemon } from "utils"

export const BadButton = () => {
    const [pokemonName, setPokemonName] = useState("")
    const [encryptedMessage, setEncryptedMessage] = useState("")

    const onClick = async () => {
        const name = await getPokemon()
        setPokemonName(name)
        setEncryptedMessage(getEncryptedMessage())

    }

    return (
        <>
            <h1>{pokemonName}</h1>
            <p>{encryptedMessage}</p>
            <button onClick={onClick}>
                Get pokemon (bad)
            </button>
        </>

    )
}