import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'

const { faker } = require('@faker-js/faker');

describe('Editar un Post con más de 5000 caracteres en el cuerpo', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()  
  const aBody= faker.lorem.sentences(100)

   beforeEach(function() {    
   })

    it('Editar un Post con más de 5000 caracteres en el cuerpo', () => {
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