import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BlazedemoHome from '../../support/pages/BlazedemoHome';
import BlazedemoReserve from '../../support/pages/BlazedemoReserve';
import portBuilder from '../../builders/port';

Given('Eu acesse a pagina do Blazedemo', () => {
    BlazedemoHome.accessHomePage();
    //BlazedemoHome.viewUrlHomePage();
  });

Given('Eu selecione o aeroporto de partida', () => {
    BlazedemoHome.selectFromPort(portBuilder.ports);
});

Given('Eu selecione o aeroporto de destino', () =>{
    BlazedemoHome.selectToPort(portBuilder.ports);
});

When('Eu selecionar Find Flights', () =>{
    BlazedemoHome.findFlights();
});

Then('A pagina com os voos encontrados sera apresentada', () =>{
    BlazedemoReserve.confirmTitle();
});




