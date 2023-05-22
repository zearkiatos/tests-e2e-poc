Feature: ghost

# @user1 @web
# Scenario: Escenario iniciar sesión y ver sitio
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 10 seconds
#   When I need take a screenshot "1-step-ir-a-login" "iniciar-sesion"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "iniciar-sesion"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "iniciar-sesion"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "iniciar-sesion"
#   And I wait for 7 seconds
#   Then I see site link into site
#   And I need take a screenshot "5-step-assert" "iniciar-sesion"

# @user2 @web
# Scenario: Escenario creación de páginas
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   And I need take a screenshot "1-step-ir-a-login" "creacion-paginas"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "creacion-paginas"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "creacion-paginas"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "creacion-paginas"
#   And I wait for 5 seconds
#   And I click in pages
#   And I need take a screenshot "5-step-click-pages" "creacion-paginas"
#   And I click in new page
#   And I need take a screenshot "6-step-click-new-page" "creacion-paginas"
#   And I wait for 5 seconds
#   And I enter the page title 
#   And I need take a screenshot "7-step-enter-title" "creacion-paginas"
#   And I enter the page Body
#   And I need take a screenshot "8-step-enter-body" "creacion-paginas"
#   And I wait for 2 seconds
#   And I click the publish menu
#   And I need take a screenshot "9-step-click-publish-menu" "creacion-paginas"
#   And I wait for 2 seconds
#   And I click the publish page
#   And I need take a screenshot "10-step-click-publish-page" "creacion-paginas"
#   And I wait for 3 seconds
#   Then I see messsage published
#   And I need take a screenshot "11-step-assert" "creacion-paginas"


# @user3 @web
# Scenario: Escenario creación de posts
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   And I need take a screenshot "1-step-ir-a-login" "creacion-posts"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "creacion-posts"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "creacion-posts"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "creacion-posts"
#   And I wait for 8 seconds
#   And I click in posts
#   And I need take a screenshot "5-step-click-posts" "creacion-posts"
#   And I click in new post
#   And I need take a screenshot "6-step-click-new-post" "creacion-posts"
#   And I wait for 5 seconds
#   And I enter the post title 
#   And I need take a screenshot "7-step-enter-title" "creacion-posts"
#   And I enter the post Body
#   And I need take a screenshot "8-step-enter-body" "creacion-posts"
#   And I wait for 2 seconds
#   And I click the publish post menu
#   And I need take a screenshot "9-step-click-publish-menu" "creacion-posts"
#   And I wait for 2 seconds
#   And I click the pubish post page
#   And I need take a screenshot "10-step-click-publish-post" "creacion-posts"
#   And I wait for 2 seconds
#   Then I see messsage published
#   And I need take a screenshot "11-step-assert" "creacion-posts"



# @user4 @web
# Scenario: Escenario creación de posts y consulta del post creado
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   And I need take a screenshot "1-step-ir-a-login" "creacion-posts-consulta"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "creacion-posts-consulta"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "creacion-posts-consulta"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "creacion-posts-consulta"
#   And I wait for 8 seconds
#   And I click in posts
#   And I need take a screenshot "5-step-click-posts" "creacion-posts-consulta"
#   And I click in new post
#   And I need take a screenshot "6-step-click-new-post" "creacion-posts-consulta"
#   And I wait for 5 seconds
#   And I enter the post title 
#   And I need take a screenshot "7-step-enter-title" "creacion-posts-consulta"
#   And I enter the post Body
#   And I need take a screenshot "8-step-enter-body" "creacion-posts-consulta"
#   And I wait for 2 seconds
#   And I click the publish post menu
#   And I need take a screenshot "9-step-click-publish-menu" "creacion-posts-consulta"
#   And I wait for 2 seconds
#   And I click the pubish post page
#   And I need take a screenshot "10-step-click-publish-post" "creacion-posts-consulta"
#   And I wait for 2 seconds
#   And I click the back button
#   And I need take a screenshot "11-step-click-back" "creacion-posts-consulta" 
#   Then I see post created
#   And I need take a screenshot "12-step-assert" "creacion-posts-consulta"


# @user5 @web
# Scenario: Escenario creación de paginas y consulta del pagina creada
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   And I need take a screenshot "1-step-ir-a-login" "creacion-pagina-consulta"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "creacion-pagina-consulta"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "creacion-pagina-consulta"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "creacion-pagina-consulta"
#   And I wait for 5 seconds
#   And I click in pages
#   And I need take a screenshot "5-step-click-pages" "creacion-pagina-consulta"
#   And I click in new page
#   And I need take a screenshot "6-step-click-new-page" "creacion-pagina-consulta"
#   And I wait for 5 seconds
#   And I enter the page title 
#   And I need take a screenshot "7-step-enter-title" "creacion-pagina-consulta"
#   And I enter the page Body
#   And I need take a screenshot "8-step-enter-body" "creacion-pagina-consulta"
#   And I wait for 2 seconds
#   And I click the publish menu
#   And I need take a screenshot "9-step-click-publish-menu" "creacion-pagina-consulta"
#   And I wait for 2 seconds
#   And I click the publish page
#   And I need take a screenshot "10-step-click-publish-page" "creacion-pagina-consulta"
#   And I wait for 2 seconds
#   And I click the back button to page 
#   And I need take a screenshot "11-step-click-back" "creacion-pagina-consulta" 
#   Then I see page created
#   And I need take a screenshot "12-step-assert" "creacion-pagina-consulta"


# @user6 @web
# Scenario: Escenario creación de tag
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   And I need take a screenshot "1-step-ir-a-login" "creacion-tag"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "creacion-tag"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "creacion-tag"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "creacion-tag"
#   And I wait for 8 seconds
#   And I click in tags
#   And I need take a screenshot "5-step-click-tags" "creacion-tag"
#   And I click in new tag
#   And I need take a screenshot "6-step-click-new-tag" "creacion-tag"
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I need take a screenshot "7-step-ingresar-name" "creacion-tag"
#   And I enter the tag color
#   And I need take a screenshot "8-step-ingresar-color" "creacion-tag"
#   And I enter the tag slug
#   And I need take a screenshot "9-step-ingresar-slug" "creacion-tag"
#   And I enter the tag description
#   And I need take a screenshot "10-step-ingresar-descripcion" "creacion-tag"
#   And I wait for 2 seconds
#   And I click save button
#   And I need take a screenshot "11-step-click-guardar" "creacion-tag"
#   And I wait for 2 seconds
#   And I click in tags
#   And I need take a screenshot "12-step-click-tags" "creacion-tag"
#   And I wait for 5 seconds
#   Then I see tag created
#   And I need take a screenshot "13-step-assert" "creacion-tag"


# @user7 @web
# Scenario: Escenario de invitación de miembros a Ghost
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   And I need take a screenshot "1-step-ir-a-login" "invitar-miembros"
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "2-step-ingresar-email" "invitar-miembros"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "3-step-ingresar-password" "invitar-miembros"
#   And I click signin
#   And I need take a screenshot "4-step-click-iniciar-sesion" "invitar-miembros"
#   And I wait for 8 seconds
#   And I click in staff
#   And I need take a screenshot "5-step-click-staff" "invitar-miembros"
#   And I click in invite people
#   And I need take a screenshot "6-step-click-invitar" "invitar-miembros"
#   And I wait for 2 seconds
#   And I enter the email  
#   And I need take a screenshot "7-step-ingresar-email" "invitar-miembros"
#   And I click the send invitation
#   And I need take a screenshot "8-step-click-enviar" "invitar-miembros"
#   And I wait for 2 seconds
#   And I click in pages
#   And I need take a screenshot "9-step-click-pages" "invitar-miembros"
#   And I wait for 2 seconds
#   And I click in staff
#   And I need take a screenshot "10-step-click-staff" "invitar-miembros"
#   Then I see invitation created
#   And I need take a screenshot "11-step-assert" "invitar-miembros"

# @user8 @web
# Scenario: Escenario creación post programado
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "post-scheduled"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "post-scheduled"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I need take a screenshot "3-step-click-on-posts" "post-scheduled"
#   And I click on Scheduled Post
#   And I need take a screenshot "4-step-click-on-scheduled-posts" "post-scheduled"
#   And I click in new post
#   And I need take a screenshot "5-step-click-on-new-post" "post-scheduled"
#   And I type the post title
#   And I need take a screenshot "6-step-type-post-title" "post-scheduled"
#   And I type the post Body
#   And I need take a screenshot "7-step-type-post-body" "post-scheduled"
#   And I click on publish dropdown menu
#   And I need take a screenshot "8-step-click-on-publish-dropdown-menu" "post-scheduled"
#   And I select scheduled option
#   And I need take a screenshot "9-step-select-scheduled-option" "post-scheduled"
#   And I select the time input
#   And I set a new time for the schedule
#   And I need take a screenshot "10-step-type-new-time-schedule" "post-scheduled"
#   And I save the post scheduled
#   And I need take a screenshot "11-step-save-scheduled" "post-scheduled"
#   And I close the scheduled dropdown form
#   And I need take a screenshot "12-step-close-dropdown-scheduled" "post-scheduled"
#   And I click on Scheduled Post
#   And I need take a screenshot "13-step-click-on-post-scheduled" "post-scheduled"
#   Then I can see the the new scheduled post
#   And I need take a screenshot "14-step-check-the-new-scheduled-post" "post-scheduled"

# @user9 @web
# Scenario: Escenario posts published
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "published-posts"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "published-posts"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I need take a screenshot "3-step-click-on-posts" "published-posts"
#   And I click in new post
#   And I need take a screenshot "4-step-click-on-new-post" "published-posts"
#   And I wait for 5 seconds
#   And I enter the post title
#   And I need take a screenshot "5-step-type-post-title" "published-posts"
#   And I enter the post Body
#   And I need take a screenshot "6-step-type-post-title" "published-posts"
#   And I wait for 2 seconds
#   And I click the publish post menu
#   And I need take a screenshot "7-step-click-on-publish-post-menu" "published-posts"
#   And I wait for 2 seconds
#   And I click the publish post page
#   And I need take a screenshot "8-step-click-on-publish-post-menu" "published-posts"
#   And I wait for 2 seconds
#   And I click the back button
#   And I need take a screenshot "9-step-click-on-back-button" "published-posts"
#   And I wait for 5 seconds
#   And I go to the post published page
#   And I need take a screenshot "10-step-go-to-the-published-post" "published-posts"
#   And I wait for 5 seconds
#   Then I see post created
#   And I need take a screenshot "11-step-check-the-created-post" "published-posts"

# @user10 @web
# Scenario: Escenario publication settings
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "publication-settings"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "publication-settings"
#   And I click signin
#   And I click on general settings
#   And I need take a screenshot "3-step-click-on-general-settings" "publication-settings"
#   And I wait for 8 seconds
#   And I click on expand button of the title and description section
#   And I need take a screenshot "4-step-click-on-expand-button-of-the-title-and-description" "publication-settings"
#   And I wait for 3 seconds
#   And I edit the page title
#   And I need take a screenshot "5-step-edit-the-page-title" "publication-settings"
#   And I click on save the setting
#   And I need take a screenshot "6-step-click-on-save-setting" "publication-settings"
#   And I wait for 5 seconds
#   Then I check the site title changed 
#   And I need take a screenshot "7-step-check-the-site-title-changed" "publication-settings"

# @user11 @web
# Scenario: Escenario design options
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "design-options"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "design-options"
#   And I click signin
#   And I click on design
#   And I need take a screenshot "3-step-click-on-design" "design-options"
#   And I wait for 3 seconds
#   And I type the name for the new menu option
#   And I need take a screenshot "4-step-type-name" "design-options"
#   And I wait for 3 seconds
#   And I type the url for the new menu option
#   And I need take a screenshot "5-step-type-url" "design-options"
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I need take a screenshot "6-step-click-on-save-button" "design-options"
#   And I wait for 5 seconds
#   And I click on view site
#   And I need take a screenshot "7-step-click-on-view-site" "design-options"
#   And I wait for 3 seconds
#   Then Should exist new google nav option
#   And I need take a screenshot "8-step-exist-new-google-nav-option" "design-options"

# @user12 @web
# Scenario: Eliminar opción del menú
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "delete-menu-option"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "delete-menu-option"
#   And I click signin
#   And I click on design
#   And I need take a screenshot "3-step-click-on-design" "delete-menu-option"
#   And I wait for 3 seconds
#   And I delete the nav menu created
#   And I need take a screenshot "4-step-click-delete-nav-menu-created" "delete-menu-option"
#   And I click on save button in design setting
#   And I need take a screenshot "5-step-click-save-button-design-setting" "delete-menu-option"
#   And I wait for 5 seconds
#   And I click on view site
#   And I need take a screenshot "6-step-click-view-site" "delete-menu-option"
#   And I wait for 3 seconds
#   Then Should not exist new google nav option
#   And I need take a screenshot "7-step-check-that-nav-option-not-exist" "delete-menu-option"

# @user13 @web
# Scenario: Escenario code injection
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I need take a screenshot "1-step-type-email" "code-injection"
#   And I enter password "<PASSWORD>"
#   And I need take a screenshot "2-step-type-password" "code-injection"
#   And I click signin
#   And I click on code injection
#   And I need take a screenshot "3-step-on-click-code-injection" "code-injection"
#   And I wait for 3 seconds
#   And I type the code injection
#   And I need take a screenshot "4-step-type-code-injection" "code-injection"
#   And I wait for 3 seconds
#   And I save the inject code
#   And I need take a screenshot "5-step-save-code-injection" "code-injection"
#   And I wait for 5 seconds
#   Then I check if the code injection exist
#   And I need take a screenshot "6-step-check-if-code-injection-exist" "code-injection"

# @user14 @web
# Scenario: Escenario creación post programado vacio
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I click on Scheduled Post
#   And I click in new post
#   And I type the an empty post title
#   And I type the post Body with a prioi data
#   And I click on publish dropdown menu
#   And I select scheduled option
#   And I select the time input
#   And I set a new time for the schedule
#   And I save the post scheduled
#   And I close the scheduled dropdown form
#   And I wait for 3 seconds
#   And I click on Scheduled Post
#   Then I can validate the title as Untitled

# @user15 @web
# Scenario: Escenario creación post programado con data pseudo aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I click on Scheduled Post
#   And I click in new post
#   And I type the post title with pseudo random data
#   And I select the body editor
#   And I click on add feature
#   And I select the markdown feature option
#   And I wait for 5 seconds
#   And I type the post Body in a markdown with pseudo random data
#   And I wait for 5 seconds
#   And I click on publish dropdown menu
#   And I select scheduled option
#   And I select the time input
#   And I set a new time for the schedule
#   And I save the post scheduled
#   And I close the scheduled dropdown form
#   And I wait for 3 seconds
#   And I click on Scheduled Post
#   Then I check the data that come from the pseudo random data

# @user16 @web
# Scenario: Escenario creación post programado con contenido HTML a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I click on Scheduled Post
#   And I click in new post
#   And I type the post Title with a prioi data
#   And I select the body editor
#   And I click on add feature
#   And I select the html feature option
#   And I wait for 5 seconds
#   And I type the post Body in a html with apriori data
#   And I wait for 5 seconds
#   And I click on publish dropdown menu
#   And I select scheduled option
#   And I select the time input
#   And I set a new time for the schedule
#   And I save the post scheduled
#   And I close the scheduled dropdown form
#   And I wait for 3 seconds
#   And I click on Scheduled Post
#   Then I check the data that come from the apriori data

# @user17 @web
# Scenario: Escenario creación post programado con contenido bookmark pseudo aleatorio
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I click on Scheduled Post
#   And I click in new post
#   And I type the post title with pseudo random data
#   And I select the body editor
#   And I click on add feature
#   And I select the bookmark feature option
#   And I wait for 5 seconds
#   And I type the post url bookmark with a pseudo random data
#   And I wait for 5 seconds
#   And I click on publish dropdown menu
#   And I select scheduled option
#   And I select the time input
#   And I set a new time for the schedule
#   And I save the post scheduled
#   And I close the scheduled dropdown form
#   And I wait for 3 seconds
#   And I click on Scheduled Post
#   Then I check the data that come from the pseudo random data

# @user18 @web
# Scenario: Escenario publication settings actualizar zona horaria data a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I click on general settings
#   And I wait for 8 seconds
#   And I click on expand button of the timezone section
#   And I wait for 3 seconds
#   And I select the timezone with apriori data
#   And I click on save the setting
#   And I wait for 5 seconds
#   Then I check if the timezone is selected with apriori data

# @user19 @web
# Scenario: Escenario publication settings titulo de sitio vacio con data pseudo aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 5 seconds
#   And I click on general settings
#   And I wait for 8 seconds
#   And I click on expand button of the title and description section
#   And I wait for 3 seconds
#   And I edit the site title with empty data
#   And I edit the site description with pseudo random data
#   And I click on save the setting
#   And I wait for 5 seconds
#   Then I check if the site title is empty

# @user20 @web
# Scenario: Escenario design options agregar opción menú secundario con data a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for a secondary menu option with apriori data
#   And I wait for 3 seconds
#   And I type the url for a secondary menu option with apriori data
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should exist a new secondary menu generated with apriori data

# @user21 @web
# Scenario: Eliminar opción menú secundario con data apriori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I delete the nav secundary menu created
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should not exist secondary nav option with apriori data

# @user22 @web
# Scenario: Escenario design options agregar opción menú secundario con url vacio y data pseudo aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for a secondary menu option with pseudo random data
#   And I wait for 3 seconds
#   And I type the url an empty url in the secondary menu
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 3 seconds
#   Then Should get an error with bad url format

# @user23 @web
# Scenario: Escenario design options con data aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for the new menu option with random data
#   And I wait for 3 seconds
#   And I type the url for the new menu option with random data
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should exist new nav option with random data

# @user24 @web
# Scenario: Ingresar al sistema correctamente y ver sitio pool de datos a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data 
#   And I enter password apriori data 
#   And I click signin
#   And I wait for 7 seconds
#   Then I see site link into site

# @user25 @web
# Scenario: Ingresar al sistema correctamente y ver sitio pool de datos a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data 
#   And I enter password apriori data 
#   And I click signin
#   And I wait for 7 seconds
#   Then I see site link into site  

# @user26 @web
# Scenario: Ingreso fallido debido a contraseña incorrecta
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data  
#   And I enter password no valid apriori data 
#   And I click signin
#   And I wait for 3 seconds
#   Then I see error password

# @user27 @web
# Scenario: Escenario creación de tag datos aleatorios 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   And I click in tags
#   And I wait for 5 seconds
#   Then I see tag created

# @user28 @web
# Scenario: Crear un nuevo tag con el nombre de más de 191 caracteres pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag longer pseudoaleatorio name
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error name is longer

# @user29 @web
# Scenario: Crear un nuevo tag con el nombre de más de 191 caracteres pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the longer tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error description is longer  

# @user30 @web
# Scenario: Crear un nuevo tag con un no color válido pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the invalid tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error invalid color

# @user31 @web
# Scenario: Escenario code injection en el pie de página con data apriori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on code injection
#   And I wait for 3 seconds
#   And I type the code injection in the footer with data apriori
#   And I wait for 3 seconds
#   And I save the inject code
#   And I wait for 5 seconds
#   Then I check if the code injection exist with data apriori

# @user32 @web
# Scenario: Escenario code injection en el encabezado de la página con data aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on code injection
#   And I wait for 3 seconds
#   And I type the code injection in the header with pseudo random data
#   And I wait for 3 seconds
#   And I save the inject code
#   And I wait for 5 seconds
#   Then I check if the code injection exist in the header with pseudo random data

# @user33 @web
# Scenario: Escenario publication settings meta data del sitio con data apriori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on general settings
#   And I wait for 8 seconds
#   And I click on expand meta site setting
#   And I wait for 3 seconds
#   And I edit the site meta title
#   And I click on save the setting
#   And I wait for 5 seconds
#   Then I check the meta site title changed

# @user34 @web
# Scenario: Escenario creación post programado con data apriori con error de agendamiento menor a 2 minutos
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in posts
#   And I wait for 5 seconds
#   And I click on Scheduled Post
#   And I click in new post
#   And I type the post Title with a prioi data
#   And I type the post Body with a prioi data
#   And I click on publish dropdown menu
#   And I select scheduled option
#   And I select the time input
#   And I set a new time with the current date for the schedule
#   And I save the post scheduled
#   And I wait for 3 seconds
#   Then I should receive error must be at least 2 mins in the future

# @user35 @web
# Scenario: Escenario publication settings cambiar idioma de publicación con dato aleatorio
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 5 seconds
#   And I click on general settings
#   And I wait for 8 seconds
#   And I click on expand button publication language
#   And I wait for 3 seconds
#   And I add a new language publication random data
#   And I click on save the setting
#   And I wait for 5 seconds
#   Then I check if the language input random was created

# @user36 @web
# Scenario: Escenario design options agregar opción menú secundario con data a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for a secondary menu option with apriori data
#   And I wait for 3 seconds
#   And I type the url for a secondary menu option with apriori data
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should exist a new secondary menu generated with apriori data

# @user37 @web
# Scenario: Eliminar opción menú secundario con data apriori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I delete the nav secundary menu created
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should not exist secondary nav option with apriori data

# @user38 @web
# Scenario: Escenario design options agregar opción menú secundario con url vacio y data pseudo aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for a secondary menu option with pseudo random data
#   And I wait for 3 seconds
#   And I type the url an empty url in the secondary menu
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 3 seconds
#   Then Should get an error with bad url format

# @user39 @web
# Scenario: Escenario design options con data aleatoria
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 3 seconds
#   And I click on design
#   And I wait for 3 seconds
#   And I type the name for the new menu option with random data
#   And I wait for 3 seconds
#   And I type the url for the new menu option with random data
#   And I wait for 3 seconds
#   And I click on save button in design setting
#   And I wait for 5 seconds
#   And I click on view site
#   And I wait for 3 seconds
#   Then Should exist new nav option with random data

# @user40 @web
# Scenario: Ingresar al sistema correctamente y ver sitio pool de datos a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data 
#   And I enter password apriori data 
#   And I click signin
#   And I wait for 7 seconds
#   Then I see site link into site

# @user41 @web
# Scenario: Ingreso fallido debido a correo electrónico incorrecto pool de datos a priori
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data 
#   And I enter password apriori data 
#   And I click signin
#   And I wait for 7 seconds
#   Then I see site link into site  


# @user42 @web
# Scenario: Ingreso fallido debido a contraseña incorrecta
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 5 seconds
#   When I enter email apriori data  
#   And I enter password no valid apriori data 
#   And I click signin
#   And I wait for 3 seconds
#   Then I see error password


# @user43 @web
# Scenario: Crear una nuevo tag datos aleatorios 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   And I click in tags
#   And I wait for 5 seconds
#   Then I see tag created


  
# @user44 @web
# Scenario: Crear un nuevo tag con el nombre de más de 191 caracteres pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag longer pseudoaleatorio name
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error name is longer

# @user45 @web
# Scenario: Crear un nuevo tag con la descripción de más de 500 caracteres pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the tag color
#   And I enter the tag slug
#   And I enter the longer tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error description is longer  



# @user46 @web
# Scenario: Crear un nuevo tag con un color no válido pool de datos Pseudo aleatorio 
#   Given I go to login page of Ghost "<URLSIGNIN>"
#   And I wait for 2 seconds
#   When I enter email "<EMAIL>"
#   And I enter password "<PASSWORD>"
#   And I click signin
#   And I wait for 8 seconds
#   And I click in tags
#   And I click in new tag
#   And I wait for 5 seconds
#   And I enter the tag name 
#   And I enter the invalid tag color
#   And I enter the tag slug
#   And I enter the tag description
#   And I wait for 2 seconds
#   And I click save button
#   And I wait for 2 seconds
#   Then I see error invalid color

@user47 @web
Scenario: Escenario publication settings actualizar red social con data aleatoria
  Given I go to login page of Ghost "<URLSIGNIN>"
  And I wait for 5 seconds
  When I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click signin
  And I wait for 5 seconds
  And I click on general settings
  And I wait for 8 seconds
  And I click on expand button of the social media
  And I wait for 3 seconds
  # And I edit the site title with empty data
  # And I edit the site description with pseudo random data
  # And I click on save the setting
  # And I wait for 5 seconds
  # Then I check if the site title is empty
