# cypress-cucumber
 POC Cypress com Cucumber

Passo a passo (após projeto inicializado):
1) >npm install --save-dev cypress-cucumber-preprocessor
2) Seguir instruções de: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#installation
3) Criar .vscode/settings.json conforme https://github.com/alexkrechik/VSCucumberAutoComplete#settings-example
4) Seguir estrutura de features e steps de: https://github.com/TheBrainFamily/cypress-cucumber-example/tree/master/cypress/integration/news

5) Rodar na linha de comando: ./node_modules/.bin/cypress-tags run -e TAGS='@focus'
6) Rodar no GUI: ./node_modules/.bin/cypress open

7) Ref: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
