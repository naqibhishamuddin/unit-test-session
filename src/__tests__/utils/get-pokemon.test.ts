import { getPokemon } from "utils"

describe("Get Pokemon Name", () => {
    it("should return pokemon name", async () => {
        const name = await getPokemon()
        expect(name).toBe("Dinosaur")
    })

    it("should return error for failed request", async () => {
        //@ts-ignore
        window.fetch.mockImplementation(() => {
            return {
                status: 400,
            }
        })

        try {
            await getPokemon()
        } catch (error) {
            if (error) {
                expect(error.toString()).toBe("Error: Something went wrong while fetching your pokemon")
            }
        }
    })
})