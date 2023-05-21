class SigninPage {
    constructor(driver){
      this.driver=driver;
    }

    get emailInput(){
      return this.driver.$('input[name="identification"]');
    }

    get passwordInput(){
      return this.driver.$('input[name="password"]');
    }

    get signInButton(){
      return this.driver.$("button.login");
    }

    async signInClick(){
      
      return await this.signInButton.click();

    }

    async setEmail(email){
      return await this.emailInput.setValue(email);
    }

    async setPassword(pwd){
      return await this.passwordInput.setValue(pwd);
    }

    async existErrorMessage(message){
      let index=-1;
      let elements = await this.driver.$$("p.main-error");
      for (let i = 0; i < elements.length; i++) {
          let textInto=await elements[i].getText();
          console.log('al inicio ' +textInto +' al fin');
          if(textInto.includes(message)){
              index=i;
              break;
          }
      }
      return index>-1;
  }

  }

module.exports = SigninPage;