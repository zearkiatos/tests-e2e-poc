import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import MemberPage from '../../pages/MemberPage'

import { getRandomMember } from '../../../mock/member'

describe('Editar un Miembro únicamente con campos opcionales', () => {
    const sitePage = new SitePage()
    const signinPage = new SigninPage()
    const memberPage = new MemberPage()

    const member= getRandomMember();

    beforeEach(function() {
    }) 

    it('Editar un Miembro únicamente con campos opcionales', () => {    
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
        memberPage.limpiarNota()

        memberPage.ingresarNombre(member.member_name)
        memberPage.ingresarNota(member.member_description)
        memberPage.ingresarLabel(member.member_label)

        memberPage.guardarMiembro()
        
        //Then    
        cy.contains('Please enter an email').should('exist')
    });     
    })
})