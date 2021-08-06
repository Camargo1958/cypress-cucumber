Feature: Login e logout do site Seubarriga

  Eu desejo me logar no site seubarriga
  
  @login_sucesso
  Scenario: Realizar login com sucesso
    Given Eu acesse a pagina do seubarriga
    When Eu entrar com credenciais corretas
    Then Eu terei acesso a pagina de contas

  @login_usuario_invalido
  Scenario: Realizar login com usuario invalido
    Given Eu acesse a pagina do seubarriga
    When Eu entrar com credenciais de usuario invalido
    Then Eu verei uma mensagem de usuario com problemas

  @login_senha_invalida
  Scenario: Realizar login com senha invalida
    Given Eu acesse a pagina do seubarriga
    When Eu entrar com credenciais com senha invalida
    Then Eu verei uma mensagem de usuario com problemas

  @logout_sucesso
  Scenario: Realizar logout com sucesso
    Given Eu acesse a pagina do seubarriga
    And Eu realize login com sucesso
    When Eu selecionar Sair
    Then O logout sera realizado com sucesso
