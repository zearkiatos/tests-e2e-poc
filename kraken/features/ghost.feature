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

@user2 @web
Scenario: Escenario creación de páginas
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 2 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 2 seconds
  And I click in pages
  And I click in new page
  And I enter the page title 
  And I enter the page Body
  And I wait for 2 seconds
  And I click the publish menu
  And I wait for 2 seconds
  And I click the pubish page
  And I wait for 2 seconds
  Then I see messsage published