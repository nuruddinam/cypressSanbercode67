describe ('Website Reqres', () => {
    it ('POST Register Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url : 'https://reqres.in/api/register',
            failOnStatusCode: false,
            body : {
                email : "budi@gmail.com"
            },
            headers : {
                'Content-Type' : 'application/json'
                // 'x-api-key' : 'reqres-free-v1'
            }
        }).then ((response) => {
            // expect(response.status).to.eq(400)
            expect(response.status).to.eq(401)
            // expect(response.body).to.have.property('error', 'Missing password')
            expect(response.body).to.have.property('error', 'Missing API key.')
        })
    })
})