import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

const { faker } = require('@faker-js/faker');

describe('Editar un tag habilitar opción Facebook Descripción', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

    it('Editar un tag habilitar opción Facebook Descripción', () => {
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        const descripcion = faker.lorem.sentences(10)

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()
        sitePage.irATags()
        tagsPage.editarTag()
        tagsPage.habilitarFacebook()

        tagsEditorPage.ingresarDescripcionFacebook(descripcion)    

        // Then
        tagsEditorPage.guardarTag()
        });     
    })
});