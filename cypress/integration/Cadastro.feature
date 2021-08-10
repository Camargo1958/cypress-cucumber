Feature: Cadastrar novo usuario

  Eu desejo cadastrar novo usuario no site seubarriga
  
  @cadastrar_usuario_sucesso
  Scenario: Cadastrar novo usuario com sucesso
    Given Eu acesse a pagina do seubarriga
    And Eu selecione Novo usuario
    And Eu preencha os dados do novo usuario
    When Eu selecionar Cadastrar
    Then A mensagem de usuario inserico com sucesso sera apresentada