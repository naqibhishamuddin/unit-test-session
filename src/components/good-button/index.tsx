import { useGoodButton } from './useGoodButton'

export const GoodButton = () => {
    const { onClick, pokemonName, encryptedMessage } = useGoodButton()
    return (
        <>
            <h1>{pokemonName}</h1>
            <p>{encryptedMessage}</p>
            <button onClick={onClick}>
                Get pokemon
            </button>
        </>

    )
}