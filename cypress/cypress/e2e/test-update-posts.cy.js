import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import PostsPage from '../pages/PostsPage'
import PostEditorPage from '../pages/PostEditorPage'

const { faker } = require('@faker-js/faker');

const scenario="test-update-posts";
const  testCase="update-posts";

describe('Escenario para edición de posts', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()  
  const aBody= faker.lorem.words(5)

   beforeEach(function() {


  })

    it('Modificar post creado', () => {
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

      sitePage.irAPosts()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-Posts', {overwrite:true});

      postsPage.updatePost()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-update-Posts', {overwrite:true});
      
      postEditorPage.ingresarCuerpo(aBody)
      cy.wait(3000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Ingresar-Cuerpo', {overwrite:true});

      postEditorPage.actualizarPost()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Actualizar-Post', {overwrite:true});

      postEditorPage.confirmarActualizacion()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Confirmar-Actualizar-Post', {overwrite:true});

      // Then

      cy.contains('Updated').should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-Post-Actualizado', {overwrite:true});
    
    });     
  })
})