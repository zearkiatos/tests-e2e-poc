import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

const { faker } = require('@faker-js/faker');

describe('Editar un tag con un nombre mayor a 500 caracteres', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

  it('Editar un tag con un nombre mayor a 500 caracteres', () => {
    cy.fixture('login-data.json').then(function (user) {
    this.user = user;

        const name = faker.lorem.words(100)

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()
        sitePage.irATags()
        tagsPage.editarTag()
        tagsEditorPage.ingresarNombre(name)    
        tagsEditorPage.guardarTag()
        
        // Then
        cy.contains('Tag names cannot be longer than 191 characters.').should('exist')      
    });     
  })
});