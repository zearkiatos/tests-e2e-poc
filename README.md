# Descripción
Este es un proyecto  🧪 para entender, probar y aprender a trabajar con  kraken 🐙, y cypress 🤖 haciendo pruebas e2e  🧪

# Aplicación bajo pruebas

![ghostlogo](https://user-images.githubusercontent.com/48004607/236742303-a715a0aa-7ba1-481c-8baf-d96f8bc692ac.png)

Ghost versión 3.41.1
para instalar la versión de ghost hacer uso del siguiente comando:

`ghost install 3.41.1 --local --force`

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
|EC04|Escenario de creación de Tag|Valida que una etiqueta ha sido creada y que puede ser asignada a una página.|
|EC05|Escenario de invitación a miembros del equipo|Valida que una invitación puede ser enviada a un usuario.|
|EC06|Escenario edición de post post|Valida la edición del contenido de un post.|
|EC07|Escenario posts published|Valida el guardado de un posts y que este se publique y aparezca en el listado.|
|EC08|Escenario publication settings|Edita el titulo de la pagina y vaida que se modifico de forma correcta|
|EC09|Escenario design options|Agregar nueva opción en el menú principal y eliminarlo|
|EC10|Escenario code injection|Inyectar y borrar html para el footer de la página|
|EC11|Escenario de edición de un tag existente|Valida la edición de un tag en el CMS.|
|EC12|Escenario de edición de un post existente|Valida la edición de un post en el CMS.|
|EC13|Escenario de edición de una página existente|Valida la edición de un página en el CMS.|
|EC14|Escenario de activación de miembros|Es el encargado de activar la opción de miembros en el CMS.|
|EC15|Escenario de creación de nuevos miembros|Valida la creación de nuevos miembros en el CMS tras la activación de la opción en la opción Labs.|


# Instrucciones
## Pre-Condiciones
1. Ghost previamente instalado
2. La configuración inicial (Creación del sitio) en ghost ha sido completada
3. Para la configuración inicial se sugiere que el usuario administrador tenga las siguientes credenciales de acceso: 
Usuario: teste2e@test.com 
Contraseña: Teste2e12345*
Sin embargo, es posible cambiar los datos de acceso de los test tanto para los casos en cypress como en los casos en kraken en los siguientes archivos:
[kraken archivo properties.js] (https://github.com/zearkiatos/tests-e2e-poc/blob/develop/kraken/properties.json)
[cypress archivo login-data.json](https://github.com/zearkiatos/tests-e2e-poc/blob/develop/cypress/cypress/fixtures/login-data.json)

4. Cypress y  Kraken instalados previamente en la maquina


### Opcional Ghost con docker.  
5. Asegurarse que se encuentra en la raiz del proyecto y ejecutar el siguiente comando  `make docker-env-up` or `docker-compose up` 
6. para detener ghost ejecutar el siguiente comando  `make docker-env-down` or `docker-compose down`

## Pasos Con Cypress
1. Clonar el repositorio
2. Verificar que el archivo login-data.json tiene los datos correctos de usuario contraseña y url de ghost en su maquina.
3. Despues de clonar el respositorio en una terminal dirigirse a la carpeta cypress donde se encuentre el archivo  cypress.config.js 
4. Ejecutar el comando  `cypress run headless`
5. Finalmente verificar los resultados en su terminal.

## Otra alternativa de ejecución Cypress  (Opcional)
1. Ir a la carpeta de cypress
`cd cypress`
2. Ejecutar el siguiente comando 
`npm run cypress:test`





## Pasos con Kraken
1. Clonar el repositorio
2. Verificar que el archivo properties.json tiene los datos correctos de usuario contraseña y url de ghost en su maquina.
3. Despues de clonar el respositorio en una terminal dirigirse a la kraken del repositorio clonado
4. Ejecutar el comando  `npx kraken-node run`
5. Finalmente verificar los resultados en su terminal.



## Pros and contras de kraken y cypress
[Mirar pros y contras.](https://github.com/zearkiatos/tests-e2e-poc/wiki/Pruebas-de-extremo-a-extremo-con-Cypress-y-Kraken.) 


# Pruebas VRT
## Funcionalidades de las pruebas VRT
|Id|Funcionalidad|Descripción|
|--|--|--|
|FN001|Inicio de sesión|Permite el acceso a ghost|
|FN002|Páginas|Permite ver las páginas creadas agregar o editarlas|
|FN003|Posts|Muestra los posts creados en el cms y permite crear nuevos post o editarlos.|
|FN004|Tags|Permite ver los tags previamente creados y adicionalmente es posible crearlos o editarlos.|
|FN005|Staff|Permite visualizar usuarios creados en el entorno con diferesntes roles.|
|FN006|Code injection|Permite inyectar codigo en la parte superior o inferior de las páginas.|
|FN007|Publicar post programado|Permite crear un post y programar su publicación.|
|FN008|Settings page|Permite configurar el cms respecto de la información de una publicación.|
|FN009|Diseñar página|Permite editar el diseño de la página respecto de navegación y temas.|
|FN010|Publicación de post|Permite publicar post que previamente están en borrador.|

