
const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

const SigninPage = require('../../pages/SigninPage');

const SitePage = require('../../pages/SitePage');

const PagesPage = require('../../pages/PagesPage');
const PostsPage = require('../../pages/PostsPage');

const PageEditorPage = require('../../pages/PageEditorPage');

const PostEditorPage = require('../../pages/PostEditorPage');

const StaffPage = require('../../pages/StaffPage');


const TagsPage = require('../../pages/TagsPage');
const TagsEditorPage = require('../../pages/TagsEditorPage');




let signinPage = new SigninPage();
let sitePage = new SitePage();
let pagesPage = new PagesPage();
let pageEditorPage = new PageEditorPage();
let postsPage = new PostsPage();
let postEditorPage = new PostEditorPage();
let postTitle= "";
let pageTitle= "";
let emailToInvite="";
let staffPage =  new StaffPage();
let tagsPage=new TagsPage();
let tagsEditorPage= new TagsEditorPage();


Given("I go to login page of Ghost {kraken-string}",async function(url){
    signinPage = new SigninPage(this.driver);
    sitePage = new SitePage(this.driver);
    pagesPage = new PagesPage(this.driver);
    pageEditorPage = new PageEditorPage(this.driver);
    postsPage = new PostsPage(this.driver);
    postEditorPage = new PostEditorPage(this.driver);
    postTitle= faker.lorem.words(5);
    pageTitle= faker.lorem.words(5);

    emailToInvite=faker.internet.email();
    staffPage =  new StaffPage(this.driver);
    tagName= faker.lorem.words(1);
    tagsPage=new TagsPage(this.driver);
    tagsEditorPage= new TagsEditorPage(this.driver);
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
    return await pageEditorPage.setTitle(pageTitle);
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

When('I click the back button to page', async function() {
    return await pageEditorPage.clickBack();
});



When('I click in posts', async function() {
    return await sitePage.clickPosts();
});

When('I click in new post', async function() {
    return await postsPage.clickNewPost();
});

When('I enter the post title', async function() {
    return await postEditorPage.setTitle(postTitle);
});

When('I enter the post Body', async function() {
    return await postEditorPage.setBody(faker.lorem.paragraphs(1));
});

When('I click the publish post menu', async function() {
    return await postEditorPage.clickPublishMenu();
});

When('I click the pubish post page', async function() {
    return await postEditorPage.clickPublisPage();
});

When('I click the back button', async function() {
    return await postEditorPage.clickBack();
});

Then('I see post created', async function () {

    let encontrado=false;
    let elements = await this.driver.$$("h3.gh-content-entry-title");
    for (let i = 0; i < elements.length; i++) {
        let textInto=await elements[i].getText();
        if(textInto==postTitle){
            encontrado=true;
            break;
        }
    }

    expect(encontrado).to.equal(true);
  });

  Then('I see page created', async function () {

    let encontrado=false;
    let elements = await this.driver.$$("h3.gh-content-entry-title");
    for (let i = 0; i < elements.length; i++) {
        let textInto=await elements[i].getText();
        if(textInto==pageTitle){
            encontrado=true;
            break;
        }
    }

    expect(encontrado).to.equal(true);
  });  




When('I click in tags', async function() {
    return await sitePage.clickTags();
});

When('I click in new tag', async function() {
    return await tagsPage.clickNewTag();
});


When('I enter the tag name', async function() {
    return await tagsEditorPage.ingresarNombre(tagName);
});

When('I enter the tag color', async function() {

    return await tagsEditorPage.ingresarColor(faker.color.rgb({ prefix: '#', casing: 'lower' }));
});


When('I enter the tag slug', async function() {

    return await tagsEditorPage.ingresarSlug(tagName);
});


When('I enter the tag description', async function() {

    return await tagsEditorPage.ingresarDescripcion(faker.lorem.paragraph(1));
});

When('I click save button', async function() {

    return await tagsEditorPage.guardarTag();
});


Then('I see tag created', async function () {

    let existe=await tagsPage.existTaginList(tagName);

    expect(existe).to.equal(true);
  });  


  


When('I click in staff', async function() {
    return await sitePage.clickStaff();
});

When('I click in invite people', async function() {
    return await staffPage.nuevoMiembro();
});

When('I enter the email', async function() {
    return await staffPage.ingresarEmail(emailToInvite);
});


When('I click the send invitation', async function() {
    return await staffPage.invitar();
});


Then('I see invitation created', async function () {

    let existe=await staffPage.existInvitationinList(emailToInvite);

    expect(existe).to.equal(true);
  });  



  
  
