import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../support/pages/Login';
import HomePage from '../../support/pages/HomePage';
import loginBuilder from '../../builders/login';

Given('Eu acesse a pagina do seubarriga', () => {
    Login.accessLogin();
  });

When('Eu entrar com credenciais corretas', () => {
    Login.fillLogin(loginBuilder.loginSuccess);
});

Then('Eu terei acesso a pagina de contas', () =>{
    HomePage.viewSuccessMessage();
    HomePage.viewUrlHomePage();
});

When('Eu entrar com credenciais de usuario invalido', () => {
    Login.fillLogin(loginBuilder.loginUserInvalid);
});

Then('Eu verei uma mensagem de usuario com problemas', () =>{
    Login.viewWrongUserErrorMessage();
});

When('Eu entrar com credenciais com senha invalida', (  ) =>{
    Login.fillLogin(loginBuilder.loginPassInvalid);
} );
