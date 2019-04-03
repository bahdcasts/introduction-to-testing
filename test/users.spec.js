const { findUserByEmail, findUserById } = require('../users')

describe('The findUserByEmail function' , () => {
    it('finds a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com').then(response => {
            expect(response.message).toEqual('User found successfully.')

            done()
        })
    })

    it('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then(response => {
            expect(response.message).toBe('User found successfully.')
        })
    })

    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')

        expect(response.message).toBe('User found successfully.')
    })

    it('rejects with error if user with email was not found.', () => {
        const actual = findUserByEmail('x@y.com')

        expect(actual).rejects.toEqual(new Error('User with email: x@y.com was not found.'))
    })
})

describe('The findUserById function', () => {
    it('should find a user by id', async () => {
        const response = await findUserById(1)

        expect(response.message).toBe('User found successfully.')
    })
    it('should reject if user is not found by id', () => {
        const actual = findUserById(90)

        expect(actual).rejects.toEqual(new Error('User with id: 90 was not found.'))
    })
})
