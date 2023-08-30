import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { GoodButton } from 'components'

const setup = async () => {
    return render(
        <GoodButton />
    )
}
describe("Good Button", () => {
    it("should be able to render", () => {
        setup()
        expect(screen.getByRole("button", { name: "Get pokemon" })).toBeInTheDocument()
    })
})