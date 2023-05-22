import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'
import { getRandomTag } from '../../../mock/tag'

describe('Editar Tags habilitando opción Code Injection con parrafo de 1000 caracteres (Footer)', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomTag();

  beforeEach(function() {
  })

    it('Editar Tags habilitando opción Code Injection con parrafo de 1000 caracteres (Footer)', () => {
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        const title = tag.tag_name
        const paragraph = tag.tag_code_injection_footer

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

        tagsEditorPage.ingresarCodeInjectionFooter(html)    
        tagsEditorPage.guardarTag()
        
        // Then            
        cy.contains('Saved').should('exist')
        });     
    })
});