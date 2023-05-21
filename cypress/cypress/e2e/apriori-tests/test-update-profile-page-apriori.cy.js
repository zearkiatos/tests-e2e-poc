
import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import ProfileEditorPage from '../../pages/ProfileEditorPage';
import { generateRandomDescription, generateSpecialCharactes } from '../../../mock/profile';

Cypress.on('uncaught:exception', (err, runnable) => false);

describe('Scenario with specials characters', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()

  const specialString = generateSpecialCharactes();

  it('User name should receive special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserName(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('Slug cant be special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserSlug(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('Email cant be special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addEmail(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Please supply a valid email address');

    });
  });

  it('User location should receive special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserLocation(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('User webSite cant be special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserWebsite(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Website is not a valid url');

    });
  });

  it('User Facebook cant be receive special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserFacebook(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Retry');
    });
  });

  it('User Twitter cant be special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserTwitter(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('User Bio should receive special characters', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserBio(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

});

describe('Scenario  with more than 200 characters', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()

  const specialString = generateRandomDescription(201)

  it('UserName should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserName(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Name is too long');

    });
  });

  it('Slug should be more than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserSlug(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('Email should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addEmail(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.get('p').then(($paragraphs) => {
        const hasEmailTooLong = $paragraphs.toArray().some(($p) => $p.innerText.includes('Email is too long'));
        const hasEmailNotValid = $paragraphs.toArray().some(($p) => $p.innerText.includes('Please supply a valid email address'));

        if (hasEmailTooLong) {
          cy.contains('p', 'Email is too long').should('be.visible');
        } else if (hasEmailNotValid) {
          cy.contains('p', 'Please supply a valid email address').should('be.visible');
        } else {
          // Handle the case when neither condition is met
        }
      });

    });
  });

  it('User location should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserLocation(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Location is too long');

    });
  });

  it('User webSite should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserWebsite(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Website is not a valid url');

    });
  });

  it('User Facebook should be more than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserFacebook(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');
    });
  });

  it('User Twitter should be more than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserTwitter(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });

  it('User Bio should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserBio(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('p', 'Bio is too long');

    });
  });
});

describe('Scenario  with  200 characters', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()
  const specialString = generateRandomDescription(200)

  it('User Bio should be  200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserBio(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });
 
});

describe('Scenario  with less than  200 characters', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const profileEditorPage = new ProfileEditorPage()
  const specialString = generateRandomDescription(190)

  it('User Bio should be less than 200', () => {
    cy.fixture('login-data.json').then(function (user) {

      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);

      signinPage.ingresarPassword(this.user.contraseña);

      signinPage.hacerClicEnIniciarSesion();
      cy.get('.gh-nav-bottom').click()

      sitePage.irAProfile()

      profileEditorPage.addUserBio(specialString);
      profileEditorPage.updateButton();

      // Then
      cy.contains('button', 'Saved');

    });
  });
 
});