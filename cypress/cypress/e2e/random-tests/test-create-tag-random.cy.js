import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'



const { faker } = require('@faker-js/faker');

describe('Escenario creación de Tags', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const tagName= faker.lorem.word()

  beforeEach(function() {

  })

  it('Crear una nuevo tag', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      

      sitePage.irATags()
      
      tagsPage.nuevoTag()
      

      tagsEditorPage.ingresarNombre(tagName)
      
      tagsEditorPage.ingresarSlug(tagName)
      
      tagsEditorPage.ingresarDescripcion(faker.lorem.paragraph(1))
      
      tagsEditorPage.ingresarColor(faker.color.rgb({ prefix: '#', casing: 'lower' }))
      
      tagsEditorPage.guardarTag()
      
      // Then

      cy.contains('Saved').should('exist')
      
    
    }); 

    
  })



  

})