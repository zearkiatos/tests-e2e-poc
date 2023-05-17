import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

const scenario="test-update-page";
const  testCase="update-page";

describe('Escenario de actualización de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(1)  

  beforeEach(function() {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'1-'+testCase+'-Step-visit-site', {overwrite:true});
    });
  })

  it('Modificar una página existente', () => {    
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

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

      sitePage.irAPaginas()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Pages', {overwrite:true});

      pagesPage.modificarPagina()
       cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-modificar-Pagina', {overwrite:true});

      pageEditorPage.ingresarCuerpo(aBody)
      cy.wait(3000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Cuerpo', {overwrite:true});

      pageEditorPage.actualizarPagina()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Actualizar-Pagina', {overwrite:true});

      pageEditorPage.confirmarActualizacion()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Confirmar-Actualizar-Pagina', {overwrite:true});
    
      // Then

      cy.contains('Published').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Pagina-Actualizada', {overwrite:true});
          
    });     
  })
})