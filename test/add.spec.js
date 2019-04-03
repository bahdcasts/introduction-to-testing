const add = require('../add')

describe('The add function', () => {
    it('adds two numbers', () => {
        const actual = add(1, 3)
        const expected = 4

        expect(actual).toBe(expected)
    })
})
