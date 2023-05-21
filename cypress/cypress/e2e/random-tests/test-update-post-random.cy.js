import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'

const { faker } = require('@faker-js/faker');

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

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)

      signinPage.ingresarPassword(this.user.contraseña)

      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAPosts()

      postsPage.updatePost()
      
      postEditorPage.ingresarCuerpo(aBody)

      postEditorPage.actualizarPost()
      postEditorPage.confirmarActualizacion()
      // Then

      cy.contains('Updated').should('exist')
    });     
  })
})