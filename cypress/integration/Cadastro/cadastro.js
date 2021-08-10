import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import RegisterPage from '../../support/pages/RegisterPage';
import Login from '../../support/pages/Login';
import registerBuilder from '../../builders/register';

Given('Eu acesse a pagina do seubarriga', () => {
    Login.accessLogin();
  });

Given('Eu selecione Novo usuario', (  ) =>{
    Login.selectNewUser();
});

Given('Eu preencha os dados do novo usuario', (  ) =>{
    RegisterPage.fillRegister(registerBuilder.registerSuccess);
});

When('Eu selecionar Cadastrar', (  ) =>{
    RegisterPage.selectRegisterButton();
});

Then('A mensagem de usuario inserico com sucesso sera apresentada', (  ) =>{
    RegisterPage.confirmSuccessMesage();
});




