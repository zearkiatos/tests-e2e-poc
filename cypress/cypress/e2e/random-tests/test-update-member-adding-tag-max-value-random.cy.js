import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Editar miembro agregando Tag con 800 caracteres', () => {
    const sitePage = new SitePage()
    const signinPage = new SigninPage()
    const memberPage = new MemberPage()
    const memberTag = faker.lorem.paragraph(10)

    beforeEach(function() {
    }) 

    it('Editar miembro agregando Tag con 800 caracteres', () => {    
        cy.fixture('login-data.json').then(function (user) {
        this.user = user;

        // Given
        cy.visit(this.user.urlLogin);

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario)
        signinPage.ingresarPassword(this.user.contraseña)
        signinPage.hacerClicEnIniciarSesion()

        sitePage.irAMembers()

        memberPage.seleccionarMiembro()
        memberPage.ingresarLabel(memberTag)
        memberPage.guardarMiembro()
        
        //Then    
        cy.contains('Retry').should('exist')
    });     
  })
})