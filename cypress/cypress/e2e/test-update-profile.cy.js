import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import ProfileEditorPage from '../pages/ProfileEditorPage';
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Update Profile', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()

  const userName = faker.name.findName();
  const fake = faker.name.findName();
  const name = fake.toLowerCase().replace(/\s+/g, '-');
  const location = faker.address.city();
  const website = faker.internet.url();
  const username = faker.internet.userName();
  const bio = faker.lorem.sentences(2);

  it('Updates the profile fields', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()

        cy.get('.gh-nav-bottom').click()

        console.log(name);
        sitePage.irAProfile()
        profileEditorPage.addUserName(userName);
        profileEditorPage.addUserLocation(location);
        profileEditorPage.addUser(name);
        profileEditorPage.addUserWebsite(website);
        profileEditorPage.addUserTwitter(username);
        profileEditorPage.addUserFacebook(username);
        profileEditorPage.addUserBio(bio);
        profileEditorPage.updateButton();
        
      // Then

      cy.contains('button', 'Saved');


    });
  });


  it('Verifies that fields are updated correctly', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()

        cy.get('.gh-nav-bottom').click()
        sitePage.irAProfile()
        
      // Then

      cy.get('input[id="user-name"]').scrollIntoView().should('have.value', userName);
      cy.get('input[id="user-location"]').scrollIntoView().should('have.value', location);
      cy.get('input[name="user"]').scrollIntoView().should('have.value', name);
      cy.get('input[id="user-website"]').scrollIntoView().should('have.value', website);
      cy.get('input[name="user[facebook]"]').scrollIntoView().should('have.value', `https://www.facebook.com/${username}`);
      cy.get('textarea[id="user-bio"]').scrollIntoView().should('have.value', bio);
    });
  });
});