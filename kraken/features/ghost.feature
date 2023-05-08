Feature: ghost

@user1 @web
Scenario: Escenario iniciar sesión y ver sitio
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 7 seconds
  Then I see site link into site


