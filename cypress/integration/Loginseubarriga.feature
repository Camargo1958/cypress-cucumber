Feature: Login do site Seubarriga

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