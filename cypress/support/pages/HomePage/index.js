const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class HomePage{
    viewSuccessMessage(){
        cy.xpath(el.alertMessage).should('include.text', 'Bem vindo');
    }

    viewUrlHomePage(){
        cy.url().should('be.equal',`${Cypress.config('testURL')}/logar`);
    }

    selectContasAdicionar(){
        cy.xpath(el.dropDwonContas).click();
        cy.xpath(el.contasAdicionar).click();
    }

    selectContasListar(){
        cy.xpath(el.dropDwonContas).click();
        cy.xpath(el.contasListar).click();
    }

    selectCriarMovimentacao(){
        cy.xpath(el.criarMovLink).click();
    }

    resetDB(){
        cy.xpath(el.resetLink).click();
    }
}

export default new HomePage();