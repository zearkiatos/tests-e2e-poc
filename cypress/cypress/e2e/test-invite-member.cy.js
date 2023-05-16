import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import TagsPage from '../pages/TagsPage'
import TagsEditorPage from '../pages/TagsEditorPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'
import StaffPage from '../pages/StaffPage'



const { faker } = require('@faker-js/faker');

describe('Escenario de invitación de miembros a Ghost', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const email= faker.internet.email()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const staffPage = new StaffPage()

  const scenario="test-invite-member";


  beforeEach(function() {
    
    

  })


  

  it('Invitar a un miembro a ghost', () => {
    const  testCase="invitar-miembro";
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


      sitePage.irAStaff()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'5-'+testCase+'-Step-ir-a-staff', {overwrite:true});


      staffPage.nuevoMiembro()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'6-'+testCase+'-Step-nuevo miembro', {overwrite:true});

      staffPage.ingresarEmail(email)
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'7-'+testCase+'-Step-ingresar-email', {overwrite:true});


      staffPage.invitar()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'8-'+testCase+'-Step-invitar', {overwrite:true});

      cy.wait(10000);


      sitePage.irAPosts()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'9-'+testCase+'-Step-ir-a-posts', {overwrite:true});

      sitePage.irAStaff()
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'10-'+testCase+'-Step-ir-a-staff', {overwrite:true});


      cy.wait(2000)


      // Then

      cy.contains(email).should('exist')
      cy.wait(1000);
      cy.screenshot(scenario+'/'+'11-'+testCase+'-Step-asert', {overwrite:true});
      
    
    }); 

    
  })



  

})