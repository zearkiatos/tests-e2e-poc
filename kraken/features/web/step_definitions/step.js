
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

const SigninPage = require('../../pages/SigninPage');


let signinPage = new SigninPage();

Given("I go to login page of Ghost {kraken-string}",async function(url){
    signinPage = new SigninPage(this.driver);
    await this.driver.navigateTo(url);
});


When('I enter email {kraken-string}', async function (email) {
    
    
    return await signinPage.setEmail(email);
});

When('I enter password {kraken-string}', async function (pwd) {
    
    return await signinPage.setPassword(pwd);
});

When('I click signin', async function() {
    return await signinPage.signInClick();
});


Then('I see site link into site', async function () {
    let elements = await this.driver.$$('iframe[id="site-frame"]');
    let linkIntoSite = elements.length > 0;
    expect(linkIntoSite).to.equal(true);
  });