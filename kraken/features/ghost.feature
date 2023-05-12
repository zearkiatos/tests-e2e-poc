Feature: ghost

@user1 @web
Scenario: Escenario iniciar sesión y ver sitio
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 8 seconds
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
  And I wait for 5 seconds
  And I click in pages
  And I click in new page
  And I wait for 5 seconds
  And I enter the page title 
  And I enter the page Body
  And I wait for 2 seconds
  And I click the publish menu
  And I wait for 2 seconds
  And I click the pubish page
  And I wait for 8 seconds
  Then I see messsage published


@user3 @web
Scenario: Escenario creación de posts
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 2 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 8 seconds
  And I click in posts
  And I click in new post
  And I wait for 5 seconds
  And I enter the post title 
  And I enter the post Body
  And I wait for 2 seconds
  And I click the publish post menu
  And I wait for 2 seconds
  And I click the pubish post page
  And I wait for 2 seconds
  Then I see messsage published



@user4 @web
Scenario: Escenario creación de posts y consulta del post creado
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 2 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 8 seconds
  And I click in posts
  And I click in new post
  And I wait for 5 seconds
  And I enter the post title 
  And I enter the post Body
  And I wait for 2 seconds
  And I click the publish post menu
  And I wait for 2 seconds
  And I click the pubish post page
  And I wait for 2 seconds
  And I click the back button 
  Then I see post created


@user5 @web
Scenario: Escenario creación de paginas y consulta del pagina creada
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 2 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 5 seconds
  And I click in pages
  And I click in new page
  And I wait for 5 seconds
  And I enter the page title 
  And I enter the page Body
  And I wait for 2 seconds
  And I click the publish menu
  And I wait for 2 seconds
  And I click the pubish page
  And I wait for 2 seconds
  And I click the back button to page 
  Then I see page created


@user6 @web
Scenario: Escenario creación de tag
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 2 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 8 seconds
  And I click in tags
  And I click in new tag
  And I wait for 5 seconds
  And I enter the tag name 
  And I enter the tag color
  And I enter the tag slug
  And I enter the tag description
  And I wait for 2 seconds
  And I click save button
  And I wait for 2 seconds
  And I click in tags
  And I wait for 5 seconds
  Then I see tag created


@user7 @web
Scenario: Escenario de invitación de miembros a Ghost
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 8 seconds
  And I click in staff
  And I click in invite people
  And I wait for 2 seconds
  And I enter the email  
  And I click the send invitation
  And I wait for 2 seconds
  And I click in pages
  And I wait for 2 seconds
  And I click in staff
  Then I see invitation created

@user8 @web
Scenario: Escenario creación post programado
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 8 seconds
  And I click in posts
  And I click on Scheduled Post
  And I click in new post
  And I type the post title
  And I type the post Body
  And I click on publish dropdown menu
  And I select scheduled option
  And I select the time input
  And I set a new time for the schedule
  And I save the post scheduled
  And I close the scheduled dropdown form
  And I click on Scheduled Post
  Then I can see the the new scheduled post
