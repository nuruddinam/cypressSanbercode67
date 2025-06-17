import loginData from "../../fixtures/loginData.json"

class loginPage {
    visit () {
        cy.visit('/index.html')
    }

    inputUsername(usrnm){
        cy.get('#user-name').should('be.visible')
        cy.get('#user-name').clear().type(usrnm).should('have.value',usrnm)
    }

    inputPassword(password){
        cy.xpath('//input[@id="password"]').should('be.visible')
        cy.xpath('//input[@id="password"]').clear().type(password).should('have.value',password)
    }

    login_btn(){
        cy.get('.btn_action').should('be.visible')
        cy.get('.btn_action').click()
    }

    verifybaseUrl(){
        cy.url().should('include','saucedemo')
        cy.title().should('include','Swag Labs')
    }

    verifyLoginSuccess(){
        cy.url().should('include','/inventory.html')
    }

    verifyusernameInvalid(){
        cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username and password do not match any user in this service')
    }

    verifyusernameKosong(){
        cy.xpath("//h3[@data-test='error']").should('contain.text','Epic sadface: Username is required')
    }

}

export default new loginPage()