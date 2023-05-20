import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import ProfileEditorPage from '../../pages/ProfileEditorPage';
import { generateRandomDescription, generateSpecialCharactes } from '../../../mock/profile';

Cypress.on('uncaught:exception', (err, runnable) => false);
describe("Scenario Update old Password with more than 200 characters", () => {
    const sitePage = new SitePage();
    const signinPage = new SigninPage();
    const profileEditorPage = new ProfileEditorPage();
    const specialString = generateRandomDescription(201);

    it("Old Password should be less than 200", () => {
      cy.fixture("login-data.json").then(function (user) {
        const testCase = "update-profile-fields";
        this.user = user;
  
        // Given
        cy.visit(this.user.urlLogin);
  
        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        
        cy.get(".gh-nav-bottom").click();
        sitePage.irAProfile();
        profileEditorPage.addPasswordOld(specialString);
       
        // Then
        cy.contains("button", "Change Password").click();
        cy.contains("p", "Sorry, passwords can't be blank");

      });
    });

    it("New Password should be less than 200", () => {
      cy.fixture("login-data.json").then(function (user) {
        this.user = user;
  
        // Given
        cy.visit(this.user.urlLogin);
  
        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        
        cy.get(".gh-nav-bottom").click();
        sitePage.irAProfile();
        profileEditorPage.addPasswordOld(this.user.newPassword);
        profileEditorPage.addPasswordNew(specialString);
       
        // Then
        cy.contains("button", "Change Password").click();
        cy.contains("p", "Your new passwords do not match");

      });
    });
  });