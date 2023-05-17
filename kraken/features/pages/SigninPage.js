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

  }

module.exports = SigninPage;