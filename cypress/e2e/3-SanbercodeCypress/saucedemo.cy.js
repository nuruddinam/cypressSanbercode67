    describe('Fungsionalitas - Login', () => {
        beforeEach(() => {
            cy.visit('https://www.saucedemo.com/v1/index.html')
        })

        it('TSD-001-User Menginputkan Username dan Password dengan benar', () => {
            // cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.url().should('include','saucedemo')
            cy.title().should('include','Swag Labs')

            cy.get('#user-name').should('be.visible')
            cy.get('#user-name').clear().type('standard_user').should('have.value','standard_user')
            
            cy.xpath('//input[@id="password"]').should('be.visible')
            cy.xpath('//input[@id="password"]').clear().type('secret_sauce').should('have.value','secret_sauce')

            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()

            cy.url().should('include','/inventory.html')
        })

        it('TSD-002-User Menginputkan Invalid Username', () => {
            // cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.url().should('include','saucedemo')
            cy.title().should('include','Swag Labs')
            //Input Username
            cy.get('#user-name').should('be.visible')
            cy.get('#user-name').clear().type('p')
            //Input Password
            cy.xpath('//input[@id="password"]').should('be.visible')
            cy.xpath('//input[@id="password"]').clear().type('secret_sauce')
            //Mengklik Button
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()
            //Assert Invalid Username
            cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
        })
           
        it('TSD-003-User Mengosongkan Username', () => {
            // cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.url().should('include','saucedemo')
            cy.title().should('include','Swag Labs')
            //Input Username
            cy.get('#user-name').should('be.visible')
            cy.get('#user-name').clear()
            //Input Password
            cy.xpath('//input[@id="password"]').should('be.visible')
            cy.xpath('//input[@id="password"]').clear().type('secret_sauce')
            //Mengklik Button
            cy.get('.btn_action').should('be.visible')
            cy.get('.btn_action').click()
            //Assert Invalid Username
            cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username is required')

        })

    })



