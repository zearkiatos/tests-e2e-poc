import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario creación de posts', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(2)

  beforeEach(function() {
  
    

  })

  it('Crear un nuevo post con un divider', () => {

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });
   

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
    
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
     
      sitePage.irAPosts()
      
      postsPage.nuevoPost()
     

      postEditorPage.ingresarTitulo(aTitle)
     
    
      cy.wait(1000)
      postEditorPage.ingresarCuerpo(aBody)

      postEditorPage.ingresarCuerpo('{enter}')
      cy.wait(2000)
      postEditorPage.clickOnAddFeatureButton();
      postEditorPage.clickOnAddDivider();
      
      
      postEditorPage.menuPublicar()
     
      postEditorPage.publicarPost()
      

      // Then

      cy.contains('Published').should('exist')
      
    }); 

    
  })

})