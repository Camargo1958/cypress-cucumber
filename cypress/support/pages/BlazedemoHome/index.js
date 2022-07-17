const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class BlazedemoHomePage{

    accessHomePage(){
        cy.visit(`${Cypress.config('bdHomeURL')}`);
    }

    viewUrlHomePage(){
        cy.url().should('be.equal',`${Cypress.config('bdHomeURL')}`);
    }

    selectFromPort(data){
        cy.xpath(el.fromPortSelect).select(data.fromPort);
    }

    selectToPort(data){
        cy.xpath(el.toPortSelect).select(data.toPort);
    }

    findFlights(){
        cy.xpath(el.findFlightsButton).click();
    }

}

export default new BlazedemoHomePage();