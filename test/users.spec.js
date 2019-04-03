const assert = require('assert')
const { findUserByEmail, findUserById } = require('../users')

describe('The findUserByEmail function' , () => {
    it('finds a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com').then(response => {
            assert.equal(response.message, 'User found successfully.')

            done()
        })
    })

    it('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then(response => {
            assert.equal(response.message, 'User found successfully.')
        })
    })

    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')

        assert.equal(response.message, 'User found successfully.')
    })

    it('rejects with error if user with email was not found.', () => {
        return findUserByEmail('x@y.com').then(() => {
            assert.fail('Expected findUserByEmail function to reject.')
        }, error => {
            assert.equal(error.message, 'User with email: x@y.com was not found.')
        })
    })
})
