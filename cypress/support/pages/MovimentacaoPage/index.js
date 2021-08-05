const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class MovimentacaoPage{

    viewUrlContasPage(){
        cy.url().should('be.equal',`${Cypress.config('testURL')}/movimentacao`);
    }

    confirmPageTitle(){
        cy.xpath(el.title).should('include.text', 'Seu Barriga - Movimentações');
    }

    fillMovDate(data){
        cy.xpath(el.movDate).invoke('val', data.movDate);
    }

    fillQuitDate(data){
        cy.xpath(el.quitDate).invoke('val', data.quitDate);
    }

    fillDescription(data){
        cy.xpath(el.description).invoke('val', data.description);
    }

    fillInterested(data){
        cy.xpath(el.interested).invoke('val', data.interested);
    }

    fillValue(data){
        cy.xpath(el.value).invoke('val', data.value);
    }

    selectStatus(data){
        if(data.status=='Pago'){
            cy.xpath(el.statusClosedButton).click();
        }else{
            cy.xpath(el.statusDueButton).click();
        }
    }

    saveButtonSelect(){
        cy.xpath(el.saveButton).click();
    }

    confirmSucessMessage(){
        cy.xpath(el.message).should('include.text','Movimentação adicionada com sucesso!');
    }

    selectMovType(data){
        cy.xpath(el.movTypeSelector).select(data.movType);
    }

    selectAccount(data){
        var account = data.account;
        cy.get(el.accountSelector).select(account);
    }

}

export default new MovimentacaoPage();