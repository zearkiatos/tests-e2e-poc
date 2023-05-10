class StaffPage {

    constructor(driver){
        this.driver=driver;
    }

    get sendInvitationButton(){
        return this.driver.$('button.gh-btn.gh-btn-green.gh-btn-icon.ember-view');
    }

    get inviteButton(){
        return this.driver.$('button.gh-btn.gh-btn-green');
    }
    
    get emailInput(){
        return this.driver.$('input[name="email"]');
    }
    
    async nuevoMiembro (){
        return await this.inviteButton.click();
    }

    async ingresarEmail(email){
        return await this.emailInput.setValue(email);
    }

    async invitar(){
        return await this.sendInvitationButton.click();
    }

    async existInvitationinList(name){
        let index=-1;
        let elements = await this.driver.$$("h3.apps-card-app-title");
        for (let i = 0; i < elements.length; i++) {
            let textInto=await elements[i].getText();
            if(textInto==name){
                index=i;
                break;
            }
        }
        return index>-1;
    }

   
  }

module.exports = StaffPage;