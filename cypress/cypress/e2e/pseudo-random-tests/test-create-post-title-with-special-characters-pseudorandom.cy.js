import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PostsPage from '../../pages/PostsPage'
import PostEditorPage from '../../pages/PostEditorPage'
import { PostClient } from "../../../clientApi/postClient";




describe('Escenario creación de post', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const postPage = new PostsPage()
  const postEditorPage = new PostEditorPage()
  const postClient = new PostClient();

  

  beforeEach(function() {
  
    

  })

  it('Crear un post con título con caracteres especiales', () => {

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
      
      postPage.nuevoPost()
     

      //obteniendo datos pseudoaleatorios

      postClient.getPostSpecialChars().then(function (body) {
        const rand = parseInt((Math.random() * 1000).toFixed(0), 10);

        cy.wait(2000);
        postEditorPage.ingresarTitulo(body[rand].title);
        postEditorPage.ingresarCuerpo(body[rand].body );

      });

      
     
      
      
      postEditorPage.menuPublicar()
     
      postEditorPage.publicarPagina()
      

      // Then

      cy.contains('Published').should('exist')
      
    }); 

    
  })

})