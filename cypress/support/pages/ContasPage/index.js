const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class ContasPage{

    viewUrlContasPage(){
        cy.url().should('be.equal',`${Cypress.config('testURL')}/salvarConta`);
    }

    confirmPageTitle(){
        cy.xpath(el.title).should('include.text', 'Seu Barriga - Contas');
    }

    viewSucessMessage(){
        cy.xpath(el.feebBackMessage).should('include.text', 'Conta adicionada com sucesso!');
    }

    viewInitialAccountsList(){
        cy.xpath(el.accountsTableHead1).should('include.text','Conta');
        cy.xpath(el.accountsTableHead2).should('include.text','Ações');
    }

}

export default new ContasPage();