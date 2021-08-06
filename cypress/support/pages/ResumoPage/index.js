const el = require('./elements').ELEMENTS;
require('cypress-xpath');

class ResumoPage{

    viewUrlResumoPage(){
        cy.url().should('be.equal',`${Cypress.config('testURL')}/extrato`);
    }

    confirmPageTitle(){
        cy.xpath(el.title).should('include.text', 'Seu Barriga - Extrato');
    }

    viewInitialSummaryTableHead(){
        cy.xpath(el.summaryTableHead1).should('include.text','Descrição');
        cy.xpath(el.summaryTableHead2).should('include.text','Dt Pagamento');
        cy.xpath(el.summaryTableHead3).should('include.text','Conta');
        cy.xpath(el.summaryTableHead4).should('include.text','Valor');
        cy.xpath(el.summaryTableHead5).should('include.text','Situação');
        cy.xpath(el.summaryTableHead6).should('include.text','Ações');
    }

    viewAccountData(){    
        cy.xpath(el.summaryRow1Description).should('include.text','Movimentacao para exclusao');
        cy.xpath(el.sumamryRow1QuitDate).should('include.text',this.getTodayDate());
        cy.xpath(el.summaryRow1Account).should('include.text','Conta para movimentacoes');
        cy.xpath(el.summaryRow1Value).should('include.text','-1500.00');
        cy.xpath(el.summaryRow1Status).should('include.text','Pago');
        cy.xpath(el.summaryRow1ActionButton).should('include.html','<a href=');
    }

    getTodayDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //Janeiro eh 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today; 
    }

}

export default new ResumoPage();