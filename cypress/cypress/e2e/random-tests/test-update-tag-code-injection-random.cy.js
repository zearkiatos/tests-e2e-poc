import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

const { faker } = require('@faker-js/faker');

describe('Editar Tags habilitando opción Code Injection con parrafo de 1000 caracteres (Header)', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

    it('Editar Tags habilitando opción Code Injection con parrafo de 1000 caracteres (Header)', () => {
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        const title = faker.lorem.words();
        const paragraph = faker.lorem.paragraphs(5, { sentences: 1 });       

        const html = `
          <div>
            <h1>${title}</h1>
            <p>${paragraph}</p>
          </div>
        `;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()
        sitePage.irATags()
        tagsPage.editarTag()
        tagsPage.habilitarCodeInjection()

        tagsEditorPage.ingresarCodeInjectionHeader(html)    

        // Then
        tagsEditorPage.guardarTag()
        });     
    })
});