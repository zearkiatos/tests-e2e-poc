import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'
import { getRandomTag } from '../../../mock/tag'


describe('Editar un tag habilitar opción Twitter Descripción', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

    it('Editar un tag habilitar opción Twitter Descripción', () => {
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;
        const member= getRandomTag();

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()
        sitePage.irATags()
        tagsPage.editarTag()
        tagsPage.habilitarTwitter()
        
        tagsEditorPage.limpiarTwitterDescription()    
        tagsEditorPage.ingresarDescripcionTwitter(member.tag_twitter_description)    
        tagsEditorPage.guardarTag()

        // Then
        cy.contains('Saved').should('exist')    
        });     
    })
});