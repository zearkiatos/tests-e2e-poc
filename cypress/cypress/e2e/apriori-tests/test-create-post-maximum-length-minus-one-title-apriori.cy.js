import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'
import { getRandomPost, getLongerTitle } from "../../mock/post";




describe('Escenario creación de posts', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()

  

  beforeEach(function() {
  
    

  })

  it('Crear un post con título con longitud inferior al limite (255)', () => {

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });
   

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
    
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
     
      sitePage.irAPosts()
      
      postsPage.nuevoPost()
     
      const title= getLongerTitle();
      postEditorPage.ingresarTitulo(title.longertitle.substring(0, title.longertitle.length - 2));

      //obteniendo un cuerpo para la página
      const post= getRandomPost();
     
      postEditorPage.ingresarCuerpo(post.body_post);

      
      postEditorPage.menuPublicar()
     
      postEditorPage.publicarPagina()
      

       // Then

       cy.contains('Published').should('exist')
      
    }); 

    
  })

})