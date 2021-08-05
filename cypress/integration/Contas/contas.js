import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/pages/Login';
import HomePage from '../../support/pages/HomePage';
import AddContaPage from '../../support/pages/AddContaPage';
import ContasPage from '../../support/pages/ContasPage';
import loginBuilder from '../../builders/login';
import accountBuilder from '../../builders/account';


Given('Eu realize login no site do seubarriga', (  ) =>{
    Login.accessLogin();
    Login.fillLogin(loginBuilder.loginSuccess);
    HomePage.viewSuccessMessage();
    HomePage.viewUrlHomePage();
});

Given('Inicialize a base de dados', (  ) =>{
    HomePage.resetDB();
});

Given('Acesse a pagina de contas', (  ) =>{
    HomePage.selectContasAdicionar();
});

When('Eu adicionar uma nova conta', (  ) =>{
    AddContaPage.fillContaName(accountBuilder.newAccountSuccess);
    AddContaPage.saveConta();
});

Then('Uma mensagem de conta adicionada com sucesso sera apresentada', (  ) =>{
    ContasPage.viewUrlContasPage();
    ContasPage.confirmPageTitle();
    ContasPage.viewSucessMessage();
});

When('Eu selecionar listar contas', (  ) =>{
    HomePage.selectContasListar();
});

Then('Uma lista com seis contas inciais sera apresentada', (  ) =>{
    ContasPage.confirmPageTitle();
    ContasPage.viewInitialAccountsList();
});


