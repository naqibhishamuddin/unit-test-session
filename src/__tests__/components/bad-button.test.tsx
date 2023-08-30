import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { BadButton } from 'components'

const setup = async () => {
    return render(
        <BadButton />
    )
}

jest.mock("../../utils/get-encrypted-message.ts", () => {
    const actual = jest.requireActual("../../utils/get-encrypted-message.ts")
    return {
        ...actual,
        getEncryptedMessage: () => ("This is secret message")
    }
})

describe("Good Button", () => {
    it("should be able to render", () => {
        setup()
        expect(screen.getByRole("button", { name: "Get pokemon (bad)" })).toBeInTheDocument()
    })

    it("should be able to click on good button", async () => {
        setup()
        await userEvent.click(screen.getByRole("button", { name: "Get pokemon (bad)" }))
        await waitFor(() => {
            expect(screen.getByText("Dinosaur")).toBeInTheDocument()
        })
    })

    it("should be able to generate secret message", async () => {
        setup()
        await userEvent.click(screen.getByRole("button", { name: "Get pokemon (bad)" }))
        await waitFor(() => {
            expect(screen.getByText("This is secret message")).toBeInTheDocument()
        })
    })
})