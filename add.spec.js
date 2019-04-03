const add = require('./add')
const assert = require('assert')

const result = add(1, 3)
const expected = 4

assert.equal(result, expected, 'Add function does not work properly.')
