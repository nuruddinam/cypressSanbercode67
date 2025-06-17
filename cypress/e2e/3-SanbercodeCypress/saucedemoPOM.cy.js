import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json" 

    describe('Fungsionalitas - Login', () => {
        beforeEach(() => {
            // cy.visit('https://www.saucedemo.com/v1/index.html')
            loginPage.visit();
        })

        it.only('TSD-001-User Menginputkan Username dan Password dengan benar', () => {
            //Assert Url    pic : Nuruddin 160625      
            loginPage.verifybaseUrl()
            //Input Username
            loginPage.inputUsername(loginData.validUsername)
            //Input Password
            loginPage.inputPassword(loginData.validPassword)
            //Click Button
            loginPage.login_btn()
            //Assert Login
            loginPage.verifyLoginSuccess()
        })

        it('TSD-002-User Menginputkan Invalid Username', () => {
            loginPage.verifybaseUrl()
            loginPage.inputUsername(loginData.invalidUsername)
            loginPage.inputPassword(loginData.validPassword)
            loginPage.login_btn()
            loginPage.verifyusernameInvalid()
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



