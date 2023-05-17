import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import TagsPage from '../pages/TagsPage'
import TagsEditorPage from '../pages/TagsEditorPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

const scenario="test-update-tags";
const  testCase="update-tag";

describe('Escenario creación de Tags', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()

  beforeEach(function() {
  })

  it('Editar un tag existente', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

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

      sitePage.irATags()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Tags', {overwrite:true});

      tagsPage.editarTag()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-editar-Tags', {overwrite:true});
      
      tagsEditorPage.ingresarSlug('Getting Started')
      cy.wait(2000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Getting-Started', {overwrite:true});

      tagsEditorPage.ingresarDescripcion(faker.lorem.words(1))      
      cy.wait(3000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Descripcion', {overwrite:true});

      tagsEditorPage.guardarTag()      
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Guardar-Tag', {overwrite:true});
      // Then

      cy.contains('Saved').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Tags-Actualizado', {overwrite:true});
      
    });     
  })

  it('Consultar Tag previamente actualizado', ()=>{
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);

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

      sitePage.irATags()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Tags', {overwrite:true});
      // Then

      cy.contains('Getting Started').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Getting-Started', {overwrite:true});
          
    }); 
  });
});