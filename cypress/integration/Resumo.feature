Feature: Validar extrato resumo

  Eu desejo validar o extrato resumo no site seubarriga
  
  @validar_extrato_resumo_sucesso
  Scenario: Validar extrato resumo com sucesso
    Given Eu realize login no site do seubarriga
    And Inicialize a base de dados
    When Eu Selecionar o Resumo Mensal
    Then A pagina de extrato resumo sera apresentada
    And Com dados de contas corretos