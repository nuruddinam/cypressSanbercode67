describe ('FakeStoreAPI - API Testing with Cypress', () => {
    it ('Get all users', () => {
        cy.request ('https://fakestoreapi.com/users').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body[0]).to.have.property('id')

        })
    })

    it('Get user by ID', () => {
        cy.request ('https://fakestoreapi.com/users/9').then((response) => {
            const user = response.body

            expect(response.status).to.eq(200)

            //Validasi Properties
            expect(user).to.have.property('id', 9)
            expect(user).to.have.property('username').and.to.be.a ('String')
            expect(user).to.have.property('email').and.to.be.a ('string')
            expect(user).to.have.property('password').and.to.be.a ('string')
            expect(user).to.have.property('__v').and.to.be.a ('number')

            //Nested Name Object
            expect(user).to.have.property('name')
            expect(user.name).to.have.property('firstname').and.to.be.a('String')
            expect(user.name).to.have.property('lastname').and.to.be.a('String')
    })
})

    it('Post create new user', () => {
        cy.request({
            method: 'POST',
            url : 'https://fakestoreapi.com/users',
            body : {
                id: 11,
                username :"budi",
                email : "budi@gmail.com",
                password : "test123"
            },
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then ((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
        })
    })


})