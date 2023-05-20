import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'
import { getRandomPost } from "../../mock/post";




describe('Escenario creación de post', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postsPage = new PostsPage()
  const postEditorPage = new PostEditorPage()

  

  beforeEach(function() {
  
    

  })

  it('Crear un nuevo post con campos opcionales', () => {

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
     

      //no se ingresa el título solo el cuerpo

      //obteniendo un cuerpo para el post
      const post= getRandomPost();
     
      postEditorPage.ingresarCuerpo(post.body_post);
      
      postEditorPage.menuPublicar()
     
      postEditorPage.publicarPagina()
      

      // Then

      cy.contains('Published').should('exist')
      
    }); 

    
  })

})