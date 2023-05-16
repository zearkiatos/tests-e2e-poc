
import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import ProfileEditorPage from '../pages/ProfileEditorPage';
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Update Password', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()
  const scenario = "test-change-password";

  it('Can change password', () => {
    cy.fixture('login-data.json').then(function (user) {
      const testCase ='update-profile-fields'

      this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      cy.screenshot(`${scenario}/1-${testCase}-step-type-email`, {
        overwrite: true
      });
      signinPage.ingresarPassword(this.user.contraseña)
      cy.screenshot(`${scenario}/2-${testCase}-step-type-password`, {
        overwrite: true
      });
      signinPage.hacerClicEnIniciarSesion()
      cy.screenshot(`${scenario}/3-${testCase}-step-click-login`, {
        overwrite: true
      });

        cy.get('.gh-nav-bottom').click()
        sitePage.irAProfile()
        cy.screenshot(`${scenario}/4-${testCase}-step-go-to-profile`, {
          overwrite: true
        });

        profileEditorPage.addPasswordOld(this.user.contraseña);
        cy.screenshot(`${scenario}/5-${testCase}-step-add-password`, {
          overwrite: true
        });
        profileEditorPage.addPasswordNew(this.user.newPassword);
        cy.screenshot(`${scenario}/5-${testCase}-step-add-newPassword`, {
          overwrite: true
        });
        profileEditorPage.addPasswordVerify(this.user.newPassword);
        cy.screenshot(`${scenario}/5-${testCase}-step-add-password-verify`, {
          overwrite: true
        });
      // Then
      cy.contains('button', 'Change Password').click();
      cy.screenshot(`${scenario}/13-${testCase}-step-click-change-password-btn`, {
        overwrite: true
      });
      cy.contains('button', 'Saved');
      cy.screenshot(`${scenario}/13-${testCase}-step-click-save-btn`, {
        overwrite: true
      });


    });
  });
});