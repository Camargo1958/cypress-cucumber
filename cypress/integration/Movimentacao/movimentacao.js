import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/pages/Login';
import HomePage from '../../support/pages/HomePage';
import MovimentacaoPage from '../../support/pages/MovimentacaoPage';
import loginBuilder from '../../builders/login';
import moviBuilder from '../../builders/moviment';

Given('Eu realize login no site do seubarriga', (  ) =>{
    Login.accessLogin();
    Login.fillLogin(loginBuilder.loginSuccess);
    HomePage.viewSuccessMessage();
    HomePage.viewUrlHomePage();
});

Given('Inicialize a base de dados', (  ) =>{
    HomePage.resetDB();
});

Given('Selecione Criar Movimentacao', (  ) =>{
    HomePage.selectCriarMovimentacao();
});

Given('Acesse a pagina de movimentacao', (  ) =>{
    MovimentacaoPage.confirmPageTitle();
});

When('Eu criar uma nova movimentacao de receita paga', (  ) =>{
    MovimentacaoPage.fillMovDate(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.fillQuitDate(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.fillDescription(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.fillInterested(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.fillValue(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.selectStatus(moviBuilder.newIncomeMovDone);
    MovimentacaoPage.saveButtonSelect();
});

Then('Uma mensagem de movimentacao adicionada com sucesso sera apresentada', (  ) =>{
    MovimentacaoPage.confirmSucessMessage();
} );

When('Eu criar uma nova movimentacao de despesa pendente', (  ) =>{
    MovimentacaoPage.selectMovType(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.fillMovDate(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.fillQuitDate(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.fillDescription(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.fillInterested(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.fillValue(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.selectAccount(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.selectStatus(moviBuilder.newOutcomeMovDue);
    MovimentacaoPage.saveButtonSelect();
});

When('Eu criar uma nova movimentacao de receita pendente', (  ) =>{
    MovimentacaoPage.selectMovType(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.fillMovDate(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.fillQuitDate(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.fillDescription(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.fillInterested(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.fillValue(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.selectAccount(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.selectStatus(moviBuilder.newIncomeMovDue);
    MovimentacaoPage.saveButtonSelect();
});

When('Eu criar uma nova movimentacao de despesa paga', (  ) =>{
    MovimentacaoPage.selectMovType(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.fillMovDate(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.fillQuitDate(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.fillDescription(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.fillInterested(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.fillValue(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.selectAccount(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.selectStatus(moviBuilder.newOutcomeMovDone);
    MovimentacaoPage.saveButtonSelect();
});
