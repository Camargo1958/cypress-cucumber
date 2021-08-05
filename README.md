# cypress-cucumber
 POC Cypress com Cucumber
 Usando site seubarriga.wcaquino.me

Passo a passo (após projeto inicializado com npm init):
1) >npm install --save-dev cypress-cucumber-preprocessor
2) Seguir instruções de: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#installation
3) Criar .vscode/settings.json conforme https://github.com/alexkrechik/VSCucumberAutoComplete#settings-example para que o plugin de autocomplete opere corretamente
4) Seguir estrutura de features e steps de: https://github.com/TheBrainFamily/cypress-cucumber-example/tree/master/cypress/integration/news
5) Configurar cypress.json com:
{
    "testFiles": "*.feature",
    "testURL": "url base do teste"
}

6) Rodar na linha de comando: ./node_modules/.bin/cypress-tags run -e TAGS='@xxxx'
7) Rodar no GUI: ./node_modules/.bin/cypress open

Ref sobre preprocessador Cucumber: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

Autor: Aldrovando camargo Neves
