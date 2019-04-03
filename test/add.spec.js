const add = require('../add')
const assert = require('assert')

describe('The add function', () => {
    it('adds two numbers', () => {
        const actual = add(1, 3)
        const expected = 4

        assert.equal(actual, expected)
    })
})
