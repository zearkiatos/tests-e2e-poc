Feature: ghost

# @user1 @web
# Scenario: Escenario iniciar sesión y ver sitio
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 7 seconds
#   Then I see site link into site

# @user2 @web
# Scenario: Escenario creación de páginas
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 2 seconds
#   And I click in pages
#   And I click in new page
#   And I enter the page title 
#   And I enter the page Body
#   And I wait for 2 seconds
#   And I click the publish menu
#   And I wait for 2 seconds
#   And I click the pubish page
#   And I wait for 2 seconds
#   Then I see messsage published


# @user3 @web
# Scenario: Escenario creación de posts
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 2 seconds
#   And I click in posts
#   And I click in new post
#   And I enter the post title 
#   And I enter the post Body
#   And I wait for 2 seconds
#   And I click the publish post menu
#   And I wait for 2 seconds
#   And I click the pubish post page
#   And I wait for 2 seconds
#   Then I see messsage published



# @user4 @web
# Scenario: Escenario creación de posts y consulta del post creado
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 2 seconds
#   And I click in posts
#   And I click in new post
#   And I enter the post title 
#   And I enter the post Body
#   And I wait for 2 seconds
#   And I click the publish post menu
#   And I wait for 2 seconds
#   And I click the pubish post page
#   And I wait for 2 seconds
#   And I click the back button 
#   Then I see post created


@user5 @web
Scenario: Escenario creación de paginas y consulta del pagina creada
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
  And I click the back button to page 
  Then I see page created


