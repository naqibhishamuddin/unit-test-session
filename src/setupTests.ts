// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

async function mockFetch(url: string) {
    if (url.includes('/pokeapi.co/api/v2/pokemon/')) {
        return {
            status: 200,
            json: async () => ({ name: "Dinosaur" }),
        }
    }
    else {
        throw new Error(`Unhandled request: ${url}`)
    }
}

beforeAll(() => jest.spyOn(window, 'fetch'))
//@ts-ignore
beforeEach(() => window.fetch.mockImplementation(mockFetch))