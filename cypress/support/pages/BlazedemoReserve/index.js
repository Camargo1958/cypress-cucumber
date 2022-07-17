const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class BlazedemoReservePage{

    accessReservePage(){
        cy.visit(`${Cypress.config('bdReserveURL')}`);
    }

    viewUrlReservePage(){
        cy.url().should('be.equal',`${Cypress.config('bdReserveURL')}`);
    }

    confirmTitle(){
        cy.xpath(el.title).should('include.text', 'Flights from San Diego to Dublin');
    }

}

export default new BlazedemoReservePage();