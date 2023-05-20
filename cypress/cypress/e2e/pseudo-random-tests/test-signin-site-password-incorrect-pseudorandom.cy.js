
import SigninPage from "../../pages/SigninPage";
import { SigninClient } from "../../../clientApi/signinClient";


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()
  const signinClient = new SigninClient();

  beforeEach(function() {
    
  })

  it('Ingreso fallido debido a contraseña incorrecta', () => {

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      
    });

    //obteniendo una contraseña incorrecta

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinClient.getAccounts().then(function (body) {
        const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
        signinPage.ingresarPassword(body[rand].password)

      });
      
      signinPage.hacerClicEnIniciarSesion()
      

      // Then
      cy.contains('Your password is incorrect').should('exist')
       
      
    }); 
  });


})