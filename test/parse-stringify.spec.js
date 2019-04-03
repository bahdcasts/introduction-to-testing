const assert = require('assert')
const { parse, stringify } = require('../parse-stringify')

describe('The stringify function', () => {
    it('should stringify an object into a valid query string', () => {
        const actual = stringify({ by: 'kati-frantz' })
        const expected = 'by=kati-frantz'

        assert.equal(actual, expected)
    })
})

describe('The parse function', () => {
    it('should parse a query string into an object', () => {
        const actual = parse('?by=kati-frantz')
        const expected = { by: 'kati-frantz' }

        assert.deepEqual(actual, expected)
    })
})
