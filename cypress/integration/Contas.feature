Feature: Acessar e adicionar contas

  Eu desejo cadastrar contas no site seubarriga
  
  @adicionar_conta_sucesso
  Scenario: Adicionar contas com sucesso
    Given Eu realize login no site do seubarriga
    And Inicialize a base de dados
    And Acesse a pagina de contas
    When Eu adicionar uma nova conta
    Then Uma mensagem de conta adicionada com sucesso sera apresentada

  @listar_contas_sucesso
  Scenario: Listar contas com sucesso
    Given Eu realize login no site do seubarriga
    And Inicialize a base de dados
    When Eu selecionar listar contas
    Then Uma lista com seis contas inciais sera apresentada