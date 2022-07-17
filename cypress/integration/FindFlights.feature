Feature: Encontrar voos no Blazedemo.com

  Eu desejo encontrar voos no site Blazedemo.com
  
  @encontrar_voos
  Scenario: Encontrar voos com sucesso
    Given Eu acesse a pagina do Blazedemo
    And Eu selecione o aeroporto de partida
    And Eu selecione o aeroporto de destino
    When Eu selecionar Find Flights
    Then A pagina com os voos encontrados sera apresentada