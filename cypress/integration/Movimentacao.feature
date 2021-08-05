Feature: Criar movimentacoes

  Eu desejo criar movimentacoes de contas no site seubarriga
  
  @criar_movimentacao_receita_paga_sucesso
  Scenario: Criar movimentacao de receita paga com sucesso
    Given Eu realize login no site do seubarriga
    And Inicialize a base de dados
    And Selecione Criar Movimentacao
    And Acesse a pagina de movimentacao
    When Eu criar uma nova movimentacao de receita paga
    Then Uma mensagem de movimentacao adicionada com sucesso sera apresentada

  @criar_movimentacao_receita_pendente_sucesso
  Scenario: Criar movimentacao de receita pendente com sucesso
    Given Eu realize login no site do seubarriga
    And Selecione Criar Movimentacao
    And Acesse a pagina de movimentacao
    When Eu criar uma nova movimentacao de receita pendente
    Then Uma mensagem de movimentacao adicionada com sucesso sera apresentada

  @criar_movimentacao_despesa_paga_sucesso
  Scenario: Criar movimentacao de despesa paga com sucesso
    Given Eu realize login no site do seubarriga
    And Selecione Criar Movimentacao
    And Acesse a pagina de movimentacao
    When Eu criar uma nova movimentacao de despesa paga
    Then Uma mensagem de movimentacao adicionada com sucesso sera apresentada

  @criar_movimentacao_despesa_pendente_sucesso
  Scenario: Criar movimentacao de despesa pendente com sucesso
    Given Eu realize login no site do seubarriga
    And Selecione Criar Movimentacao
    And Acesse a pagina de movimentacao
    When Eu criar uma nova movimentacao de despesa pendente
    Then Uma mensagem de movimentacao adicionada com sucesso sera apresentada