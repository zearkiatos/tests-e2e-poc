Feature: ghost

@user1 @web
Scenario: Escenario iniciar sesión y ver sitio
  Given I go to login page of Ghost "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "teste2e@test.com"
  And I enter password "Teste2e12345*"
  And I click signin
  And I wait for 7 seconds
  Then I see site link into site


