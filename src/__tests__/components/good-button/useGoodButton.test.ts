import { renderHook, waitFor } from "@testing-library/react"
import { useGoodButton } from "components/good-button/useGoodButton"
import { act } from "react-dom/test-utils"

describe("useGoodButton", () => {
    it("should be able to get the pokemon name", async () => {
        const { result } = renderHook(() => useGoodButton())
        act(() => {
            result.current.onClick()
        })

        await waitFor(() => {
            expect(result.current.pokemonName).toBe("Dinosaur")
        })
    })
})