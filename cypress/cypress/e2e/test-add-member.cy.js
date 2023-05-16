import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import MemberPage from '../pages/MemberPage'

const { faker } = require('@faker-js/faker');

const scenario="test-add-member";

describe('Escenario para agregar miembros', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()
  const memberName = faker.lorem.sentence()
  const memberEmail = faker.internet.email()
  const memberNote = faker.lorem.sentence()

  beforeEach(function() {
  })

  it('Agregar nuevo miembro', () => {
    const  testCase="add-member";
    cy.fixture('login-data.json').then(function (user) {
    this.user = user;

    // Given
    cy.visit(this.user.urlLogin);
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-visit-site', {overwrite:true});

    // When
    signinPage.ingresarCorreoElectronico(this.user.usuario)
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'2-'+testCase+'-Step-ingreso-correo', {overwrite:true});
    signinPage.ingresarPassword(this.user.contraseña)
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'3-'+testCase+'-Step-ingreso-password', {overwrite:true});
    signinPage.hacerClicEnIniciarSesion()     
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'4-'+testCase+'-Step-click-inicio-sesion', {overwrite:true});

    sitePage.irAMembers()   
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Members', {overwrite:true});

    memberPage.nuevoMiembro()
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-nuevo-Miembro', {overwrite:true});

    memberPage.ingresarNombre(memberName)
    cy.wait(3000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Nombre-Miembro', {overwrite:true});

    memberPage.ingresarEmail(memberEmail)
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Correo-Miembro', {overwrite:true});

    memberPage.ingresarNota(memberNote)
    cy.wait(3000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Nota-Miembro', {overwrite:true});

    //Then
    memberPage.guardarMiembro()
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Guardar-Miembro', {overwrite:true});

    });     
  })
})