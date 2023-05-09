class ProfileEditorPage {
    userName = () => cy.get('input[id="user-name"]').scrollIntoView().clear();
    userLocation = () => cy.get('input[id="user-location"]').scrollIntoView().clear()
    user = () => cy.get('input[name="user"]').scrollIntoView().clear()
    userWebsite = () => cy.get('input[id="user-website"]').scrollIntoView().clear();
    userFacebook = () => cy.get('input[name="user[facebook]"]').scrollIntoView().clear()
    userTwitter = () => cy.get('input[name="user[twitter]"]').scrollIntoView().clear()
    userBio = () => cy.get('textarea[id="user-bio"]').scrollIntoView().clear()
    publishButton = () => cy.contains('button', 'Save');



    addUserName = (userName) => {
        this.userName().type(userName, { force: true });
    }

    addUserLocation = (location) => {
        this.userLocation().type(location, { force: true });
    }

    addUser= (user) => {
        this.user().type(user, { force: true });
    }

    addUserWebsite = (website) => {
        this.userWebsite().type(website, { force: true });
    }

    addUserTwitter= (username) => {
        this.userTwitter().type(username, { force: true });
    }

    addUserFacebook = (username) => {
        this.userFacebook().type(username, { force: true });
    }

    addUserBio = (bio) => {
        this.userBio().type(bio, { force: true });
    }

    updateButton = () => {
        this.publishButton().click()
    }


}

export default ProfileEditorPage;