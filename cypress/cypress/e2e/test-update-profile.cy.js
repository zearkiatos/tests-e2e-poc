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
  const scenario = 'update-profile'

  it('Updates the profile fields', () => {
    cy.fixture('login-data.json').then(function (user) {

      const testCase ='update-profile-fields'
      this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
          overwrite: true
        });
        signinPage.ingresarPassword(this.user.contraseña);
        cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
          overwrite: true
        });
        signinPage.hacerClicEnIniciarSesion();
        cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
          overwrite: true
        });

        cy.get('.gh-nav-bottom').click()

        sitePage.irAProfile()
        cy.screenshot(`${scenario}/4-${testCase}-step-go-to-profile`, {
          overwrite: true
        });
        profileEditorPage.addUserName(userName);
        cy.screenshot(`${scenario}/5-${testCase}-step-add-username`, {
          overwrite: true
        });
        profileEditorPage.addUserLocation(location);
        cy.screenshot(`${scenario}/6-${testCase}-step-add-userlocation`, {
          overwrite: true
        });
        profileEditorPage.addUser(name);
        cy.screenshot(`${scenario}/7-${testCase}-step-add-name`, {
          overwrite: true
        });
        profileEditorPage.addUserWebsite(website);
        cy.screenshot(`${scenario}/8-${testCase}-step-add-website`, {
          overwrite: true
        });
        profileEditorPage.addUserTwitter(username);
        cy.screenshot(`${scenario}/9-${testCase}-step-add-twitter`, {
          overwrite: true
        });
        profileEditorPage.addUserFacebook(username);
        cy.screenshot(`${scenario}/10-${testCase}-step-add-facebook`, {
          overwrite: true
        });
        profileEditorPage.addUserBio(bio);
        cy.screenshot(`${scenario}/11-${testCase}-step-add-bio`, {
          overwrite: true
        });
        profileEditorPage.updateButton();
        cy.screenshot(`${scenario}/12-${testCase}-step-click-update-btn`, {
          overwrite: true
        });
        
      // Then

      cy.contains('button', 'Saved');
      cy.screenshot(`${scenario}/13-${testCase}-step-click-save-btn`, {
        overwrite: true
      });
    });
  });


  it('Verifies that fields are updated correctly', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='check-profile-fields'
      this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
          overwrite: true
        });
        signinPage.ingresarPassword(this.user.contraseña);
        cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
          overwrite: true
        });
        signinPage.hacerClicEnIniciarSesion();
        cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
          overwrite: true
        });

        cy.get('.gh-nav-bottom').click()
        sitePage.irAProfile()
        cy.screenshot(`${scenario}/4-${testCase}-step-go-to-profile`, {
          overwrite: true
        });
        
      // Then
      cy.get('input[id="user-name"]').scrollIntoView().should('have.value', userName);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-user-name`, {
        overwrite: true
      });
      cy.get('input[id="user-location"]').scrollIntoView().should('have.value', location);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-user-location`, {
        overwrite: true
      });
      cy.get('input[name="user"]').scrollIntoView().should('have.value', name);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-user`, {
        overwrite: true
      });
      cy.get('input[id="user-website"]').scrollIntoView().should('have.value', website);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-website`, {
        overwrite: true
      });
      cy.get('input[name="user[facebook]"]').scrollIntoView().should('have.value', `https://www.facebook.com/${username}`);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-facebook`, {
        overwrite: true
      });
      cy.get('textarea[id="user-bio"]').scrollIntoView().should('have.value', bio);
      cy.screenshot(`${scenario}/5-${testCase}-step-assert-bio`, {
        overwrite: true
      });
    });
  });
});