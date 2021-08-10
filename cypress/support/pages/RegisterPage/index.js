const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class RegisterPage{

    accessRegister(){
        cy.visit('/cadastro');
    }

    fillRegister(data){
        cy.xpath(el.nameField).invoke('val', data.username);
        cy.xpath(el.emailField).invoke('val', data.email);
        cy.xpath(el.passwordField).invoke('val', data.password);
    }

    selectRegisterButton(){
        cy.xpath(el.registerButton).click();
    }

    viewUrlRegisterPage(){
        cy.url().should('be.equal',`${Cypress.config('testURL')}/cadastro`);
    }

    confirmSuccessMesage(){
        cy.xpath(el.message).should('include.text','Usuário inserido com sucesso');
    }
}

export default new RegisterPage();