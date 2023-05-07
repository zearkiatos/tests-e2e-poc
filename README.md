# Description
This is a POC project 🧪 to understand, try and learn how to work kraken 🐙, cypress 🤖 to create e2e tests 🧪

# Made with
[![JavaScript](https://img.shields.io/badge/javascript-ead547?style=for-the-badge&logo=javascript&logoColor=white&labelColor=000000)]()
[![Node.js](https://img.shields.io/badge/node.js-76c339?style=for-the-badge&logo=node.js&logoColor=white&labelColor=000000)]()
[![Cypress](https://img.shields.io/badge/Cypress-027780?style=for-the-badge&logo=cypress&logoColor=white&labelColor=000000)]()


# Functionalities
|Id|Funcionality|Description|
|--|--|--|
|FN001|Sign In|Allow the access to ghost|
|FN002|Pages|Allows to view the pages created for the site and to add or edit them|
|FN003|Posts|Displays the posts created in the cms and allows to create new posts for the site being edited.|
|FN004|Tags|Allows you to view previously created tags or labels and additionally it is possible to create or edit them.|
|FN005|Staff|Allows to visualize users created in the environment with different roles and to add more users that can enter the cms to contribute with the content.|

# Scenarios
|Id|Scenario|Description|
|--|--|--|
|EC01|Scenario login and view site|It consists of validating the login of a user to the Ghost administrator.|
|EC02|Page creation scenario|Validates that a page can be created and that it is actually created|
|EC03|Post creation scenario|Validates that a post can be created and has actually been created|
|EC04|Tags creation scenario|Validates that a tag has been created and that it can be assigned to a page|
|EC05|Scenario for inviting team members|Validates that an invitation can be sent to a user|
|EC06|...|...|
|EC07|...|...|
|EC08|...|...|

# Instructions
## Pre-conditions
1. Ghost was previously installed
2. The initial configuration of Ghost was performed
3. It is suggested that in the initial configuration the Ghost administrator user has the following credentials: 
User: teste2e@test.com 
Password: Teste2e12345*
However if the user has already been created it can be changed in the Cypress project fixtures file in the path /cypress/cypress/fixtures/login-data.json


## With Cypress
1. Clone this repository
2. Verify that the login-data.json file has the correct test data corresponding to user, password and login url.
3. After cloning the repository in your terminal go to the cypress folder that contains the file cypress.config.js 
4. Execute the command ´cypress run headless´
5. Finally verify the test results in your terminal




## With Kraken
