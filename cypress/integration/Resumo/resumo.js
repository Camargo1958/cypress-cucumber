import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/pages/Login';
import HomePage from '../../support/pages/HomePage';
import ResumoPage from '../../support/pages/ResumoPage';
import loginBuilder from '../../builders/login';

Given('Eu realize login no site do seubarriga', (  ) =>{
    Login.accessLogin();
    Login.fillLogin(loginBuilder.loginSuccess);
    HomePage.viewSuccessMessage();
    HomePage.viewUrlHomePage();
});

Given('Inicialize a base de dados', (  ) =>{
    HomePage.resetDB();
});


When('Eu Selecionar o Resumo Mensal', (  ) =>{
    HomePage.selectResumoMensal();
});

Then('A pagina de extrato resumo sera apresentada', (  ) =>{
    ResumoPage.viewInitialSummaryTableHead()
});

Then('Com dados de contas corretos', (  ) =>{
    ResumoPage.viewAccountData();
} );


