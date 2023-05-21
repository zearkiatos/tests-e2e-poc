import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

const { faker } = require('@faker-js/faker');

describe('Editar un tag existente con nombre vacío', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

  it('Editar un tag existente con nombre vacío', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;      

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      sitePage.irATags()
      tagsPage.editarTag()
      
      tagsEditorPage.ingresarSlug('Getting Started')
      tagsEditorPage.ingresarNombre('')    
      tagsEditorPage.guardarTag()
      // Then

      cy.contains('Saved').should('exist')      
    });     
  })
});