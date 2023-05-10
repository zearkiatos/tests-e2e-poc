
import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import ProfileEditorPage from '../pages/ProfileEditorPage';
Cypress.on('uncaught:exception', (err, runnable) => false);

const { faker } = require('@faker-js/faker');

describe('Update Password', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()
  const oldPassword = 'Leonardo92%';
  const newPassword ="Leonardo91%"

  it('Can change password', () => {
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

        profileEditorPage.addPasswordOld(this.user.contraseña);
        profileEditorPage.addPasswordNew(this.user.newPassword);
        profileEditorPage.addPasswordVerify(this.user.newPassword);
      // Then
      cy.contains('button', 'Change Password').click();
      cy.contains('button', 'Saved');


    });
  });
});