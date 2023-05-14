Feature: ghost

@user1 @web
Scenario: Escenario iniciar sesión y ver sitio
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 10 seconds
  When I need take a screenshot "1-iniciar-sesion-step-ir-a-login"
  When I enter email "<EMAIL>"
  And I need take a screenshot "2-iniciar-sesion-step-ingresar-email"
  And I enter password "<PASSWORD>"
  And I need take a screenshot "3-iniciar-sesion-step-ingresar-password"
  And I click signin
  And I need take a screenshot "4-iniciar-sesion-step-click-iniciar-sesion"
  And I wait for 7 seconds
  Then I see site link into site
  And I need take a screenshot "5-iniciar-sesion-step-assert"

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

@user9 @web
Scenario: Escenario posts published
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
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
  And I wait for 5 seconds
  And I go to the post published page
  And I wait for 5 seconds
  Then I see post created

@user10 @web
Scenario: Escenario publication settings
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I click on general settings
  And I wait for 8 seconds
  And I click on expand button of the title and description section
  And I wait for 3 seconds
  And I edit the page title
  And I click on save the setting
  And I wait for 5 seconds
  Then I check the site title changed

@user11 @web
Scenario: Escenario design options
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I click on design
  And I wait for 3 seconds
  And I type the name for the new menu option
  And I wait for 3 seconds
  And I type the url for the new menu option
  And I wait for 3 seconds
  And I click on save button in design setting
  And I wait for 5 seconds
  And I click on view site
  And I wait for 3 seconds
  Then Should exist new google nav option

@user12 @web
Scenario: Eliminar opción del menú
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I click on design
  And I wait for 3 seconds
  And I delete the nav menu created
  And I click on save button in design setting
  And I wait for 5 seconds
  And I click on view site
  And I wait for 3 seconds
  Then Should not exist new google nav option

@user13 @web
Scenario: Escenario code injection
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I click on code injection
  And I wait for 3 seconds
  And I type the code injection
  And I wait for 3 seconds
  And I save the inject code
  And I wait for 5 seconds
  Then I check if the code injection exist