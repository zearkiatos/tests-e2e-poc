import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import MemberPage from '../pages/MemberPage'

describe('Escenario para habilitar la opción de agregar miembros', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const memberPage = new MemberPage()

  const scenario="test-enabled-members";
  const  testCase="enabled-members";

  beforeEach(function() {
  })

  it('Habilitar opción de miembros', () => {
    cy.fixture('login-data.json').then(function (user) {
    this.user = user;

    // Given
    cy.visit(this.user.urlLogin);
    cy.wait(2000);
    cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-Labs-Members', {overwrite:true});

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

    sitePage.irALabs()
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Labs', {overwrite:true});

    memberPage.habilitarMiembros()
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-habilitar-Miembros', {overwrite:true});

    memberPage.activarOpcionMiembros()
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Activar-Opcion', {overwrite:true});

    memberPage.guardarConfigurarion()     
    cy.wait(1000);
    cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Guardar-Configuracion', {overwrite:true});
    
    });     
  })
});