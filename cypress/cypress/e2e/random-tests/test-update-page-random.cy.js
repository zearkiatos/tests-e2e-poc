import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PagesPage from '../../pages/PagesPage'
import PageEditorPage from '../../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario de actualización de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(1)  

  beforeEach(function() {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);      
    });
  })

  it('Modificar una página existente', () => {    
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)      

      signinPage.ingresarPassword(this.user.contraseña)

      signinPage.hacerClicEnIniciarSesion()

      sitePage.irAPaginas()

      pagesPage.modificarPagina()

      pageEditorPage.ingresarCuerpo(aBody)

      pageEditorPage.actualizarPagina()

      pageEditorPage.confirmarActualizacion()
    
      // Then

      cy.contains('Published').should('exist')
    });     
  })
})