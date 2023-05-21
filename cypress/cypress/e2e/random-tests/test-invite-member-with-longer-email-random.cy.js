import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'
import PagesPage from '../../pages/PagesPage'
import PageEditorPage from '../../pages/PageEditorPage'
import StaffPage from '../../pages/StaffPage'



const { faker } = require('@faker-js/faker');

describe('Escenario de invitación de miembros a Ghost', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const email= faker.random.alphaNumeric(90)+'@domain.com';
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const staffPage = new StaffPage()

  
  beforeEach(function() {
    
    

  })


  

  it('Invitar a un miembro a ghost con una dirección de correo con longitud superior a la permitida (80)', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);


      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      

      sitePage.irAStaff()
      

      staffPage.nuevoMiembro()
      
      staffPage.ingresarEmail(email)
      

      staffPage.invitar()
      
      
    // Then

    cy.contains('Invalid Email').should('exist')
      
    
    }); 

    
  })



  

})