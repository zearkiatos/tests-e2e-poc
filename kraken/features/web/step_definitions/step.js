
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

const SigninPage = require('../../pages/SigninPage');

const SitePage = require('../../pages/SitePage');

const PagesPage = require('../../pages/PagesPage');

const PageEditorPage = require('../../pages/PageEditorPage');




let signinPage = new SigninPage();
let sitePage = new SitePage();
let pagesPage = new PagesPage();
let pageEditorPage = new PageEditorPage();


Given("I go to login page of Ghost {kraken-string}",async function(url){
    signinPage = new SigninPage(this.driver);
    sitePage = new SitePage(this.driver);
    pagesPage = new PagesPage(this.driver);
    pageEditorPage = new PageEditorPage(this.driver);
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


When('I click in pages', async function() {
    return await sitePage.irAPaginas();
});

When('I click in new page', async function() {
    return await pagesPage.clickNewPage();
});

When('I enter the page title', async function() {
    return await pageEditorPage.setTitle(faker.lorem.words(5));
});

When('I enter the page Body', async function() {
    return await pageEditorPage.setBody(faker.lorem.paragraphs(1));
});

When('I click the publish menu', async function() {
    return await pageEditorPage.clickPublishMenu();
});

When('I click the pubish page', async function() {
    return await pageEditorPage.clickPublisPage();
});

Then('I see messsage published', async function () {
    let elements = await this.driver.$$('span.gh-notification-title');
    let message = elements.length > 0;
    expect(message).to.equal(true);
  });

