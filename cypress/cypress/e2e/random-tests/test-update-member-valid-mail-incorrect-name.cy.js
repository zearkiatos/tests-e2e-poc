import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

const { faker } = require('@faker-js/faker');

describe('Editar miembro con correo válido y nombre con más 300 caracteres especiales', () => {
    const sitePage = new SitePage()
    const signinPage = new SigninPage()
    const memberPage = new MemberPage()
    const memberEmail = faker.internet.email()

    const specialChars = '!@#$%^&*()_+{}[];:"<>?,./|\\`~';
    const text = faker.lorem.sentences(5);

    let memberName = text;

    // Agregar caracteres especiales al texto generado
    for (let i = 0; i < specialChars.length; i++) {
        memberName += specialChars.charAt(i);
    }

    beforeEach(function() {
    }) 

    it('Editar miembro con correo válido y nombre con más 300 caracteres especiales', () => {    
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

        memberPage.limpiarNombre()
        memberPage.limpiarEmail()
        memberPage.ingresarNombre(memberName)
        memberPage.ingresarEmail(memberEmail)
        memberPage.guardarMiembro()
        
        //Then    
        cy.contains('Retry').should('exist')
    });     
    })
})