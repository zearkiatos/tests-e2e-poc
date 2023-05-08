# Descripción
Este es un proyecto  🧪 para entender, probar y aprender a trabajar con  kraken 🐙, y cypress 🤖 haciendo pruebas e2e  🧪

# Construido con 
[![JavaScript](https://img.shields.io/badge/javascript-ead547?style=for-the-badge&logo=javascript&logoColor=white&labelColor=000000)]()
[![Node.js](https://img.shields.io/badge/node.js-76c339?style=for-the-badge&logo=node.js&logoColor=white&labelColor=000000)]()
[![Cypress](https://img.shields.io/badge/Cypress-027780?style=for-the-badge&logo=cypress&logoColor=white&labelColor=000000)]()


# Funcionalidades
|Id|Funcionalidad|Descripción|
|--|--|--|
|FN001|Inicio de sesión|Permite el acceso a ghost|
|FN002|Páginas|Permite ver las páginas creadas agregar o editarlas|
|FN003|Posts|Muestra los posts creados en el cms y permite crear nuevos post o editarlos.|
|FN004|Tags|Permite ver los tags previamente creados y adicionalmente es posible crearlos o editarlos.|
|FN005|Staff|Permite visualizar usuarios creados en el entorno con diferesntes roles.|

# Escenarios
|Id|Escenario|Descripción|
|--|--|--|
|EC01|Escenario Login y ver sitio|Consiste en validar el login de un usuario al administrador de Ghost.|
|EC02|Escenario de creación de página|Valida que se pueda crear una página y que realmente se haya creado.|
|EC03|Escenario de creación de post|Valida que un post puede ser creado y que realmente ha sido creado|
|EC04|Escenario de creación de etiquetas|Valida que una etiqueta ha sido creada y que puede ser asignada a una página.|
|EC05|Escenario de invitación a miembros del equipo|Valida que una invitación puede ser enviada a un usuario.|
|EC06|Escenario edición de post post con horario|Valida que se puede enviar una invitación a un usuario.|


# Instructions
## Pre-conditions
1. Ghost was previously installed
2. The initial configuration of Ghost was performed
3. It is suggested that in the initial configuration the Ghost administrator user has the following credentials: 
User: teste2e@test.com 
Password: Teste2e12345*
However if the user has already been created it can be changed in the Cypress project fixtures file in the path [/cypress/cypress/fixtures/login-data.json](https://github.com/zearkiatos/tests-e2e-poc/blob/develop/cypress/cypress/fixtures/login-data.json)
4. Cypress and Kraken installed in the machine
### Optional with ghost with docker
5. First make sure you are in the root of the project and run
`make docker-env-up` or `docker-compose up`

6. For turn off the ghost

`make docker-env-down` or `docker-compose down`

## With Cypress
1. Clone this repository
2. Verify that the login-data.json file has the correct test data corresponding to user, password and login url.
3. After cloning the repository in your terminal go to the cypress folder that contains the file cypress.config.js 
4. Execute the command `cypress run headless`
5. Finally verify the test results in your terminal

## Cypress run (Optional)
1. Go to cypress folder
`cd cypress`
2. Run the next command
`npm run cypress:test`





## With Kraken



## Pros and cons of the tools used
[see pros and cons](https://github.com/zearkiatos/tests-e2e-poc/wiki/Pruebas-de-extremo-a-extremo-con-Cypress-y-Kraken.) 
