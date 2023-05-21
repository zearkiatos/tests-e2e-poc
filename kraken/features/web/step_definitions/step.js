const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;
const { faker } = require("@faker-js/faker");

const SigninPage = require("../../pages/SigninPage");

const SitePage = require("../../pages/SitePage");

const PagesPage = require("../../pages/PagesPage");
const PostsPage = require("../../pages/PostsPage");

const PageEditorPage = require("../../pages/PageEditorPage");

const PostEditorPage = require("../../pages/PostEditorPage");

const StaffPage = require("../../pages/StaffPage");

const TagsPage = require("../../pages/TagsPage");
const TagsEditorPage = require("../../pages/TagsEditorPage");
const ScheduledPostPage = require("../../pages/ScheduledPostPage");
const GeneralSettingsPage = require("../../pages/GeneralSettingsPage");
const DesignSettingPage = require("../../pages/DesignSettingPage");
const CodeInjectionPage = require("../../pages/CodeInjectionPage");
const { sleep } = require("../../../utils/helper");
const { getRandomPost } = require("../../../mock/post");
const { PostClient } = require("../../../clientApi/postClient");
const { TagClient }= require("../../../clientApi/tagClient");

const { getSigninValidAccount, getRandomAccount } = require("../../../mock/singin");

let signinPage = new SigninPage();
let sitePage = new SitePage();
let pagesPage = new PagesPage();
let pageEditorPage = new PageEditorPage();
let postsPage = new PostsPage();
let postEditorPage = new PostEditorPage();
let postTitle = "";
let pageTitle = "";
let emailToInvite = "";
let staffPage = new StaffPage();
let tagsPage = new TagsPage();
let tagsEditorPage = new TagsEditorPage();
let postClient = new PostClient();
let tagClient = new TagClient();
let generalSettingsPage = null;
let designSettingPage = null;
let scheduledPostPage = null;
let codeInjectionPage = null;
const postScheduledTitle = faker.lorem.sentence();
let bodyPseudoRandom = null;
let titlePseudoRandom = null;
let urlPseudoRandom = null;
let newSiteTitle = faker.lorem.word();
let postApriori = getRandomPost();

Given("I go to login page of Ghost {kraken-string}", async function (url) {
  signinPage = new SigninPage(this.driver);
  sitePage = new SitePage(this.driver);
  pagesPage = new PagesPage(this.driver);
  pageEditorPage = new PageEditorPage(this.driver);
  postsPage = new PostsPage(this.driver);
  postEditorPage = new PostEditorPage(this.driver);
  scheduledPostPage = new ScheduledPostPage(this.driver);
  generalSettingsPage = new GeneralSettingsPage(this.driver);
  designSettingPage = new DesignSettingPage(this.driver);
  codeInjectionPage = new CodeInjectionPage(this.driver);
  postTitle = faker.lorem.words(5);
  pageTitle = faker.lorem.words(5);

  emailToInvite = faker.internet.email();
  staffPage = new StaffPage(this.driver);
  tagName = faker.lorem.words(1);
  tagsPage = new TagsPage(this.driver);
  tagsEditorPage = new TagsEditorPage(this.driver);
  await this.driver.navigateTo(url);
});

When("I enter email {kraken-string}", async function (email) {
  let resultado = await signinPage.setEmail(email);
  return resultado;
});

When("I enter password {kraken-string}", async function (pwd) {
  return await signinPage.setPassword(pwd);
});

When("I click signin", async function () {
  return await signinPage.signInClick();
});

Then("I see site link into site", async function () {
  let elements = await this.driver.$$('iframe[id="site-frame"]');
  let linkIntoSite = elements.length > 0;
  expect(linkIntoSite).to.equal(true);
});

When("I click in pages", async function () {
  return await sitePage.irAPaginas();
});

When("I click in new page", async function () {
  return await pagesPage.clickNewPage();
});

When("I enter the page title", async function () {
  return await pageEditorPage.setTitle(pageTitle);
});

When("I enter the page Body", async function () {
  return await pageEditorPage.setBody(faker.lorem.paragraphs(1));
});

When("I click the publish menu", async function () {
  return await pageEditorPage.clickPublishMenu();
});

When("I click the publish page", async function () {
  return await pageEditorPage.clickPublisPage();
});

Then("I see messsage published", async function () {
  let elements = await this.driver.$$("span.gh-notification-title");
  let message = elements.length > 0;
  expect(message).to.equal(true);
});

When("I click the back button to page", async function () {
  return await pageEditorPage.clickBack();
});

When("I click in posts", async function () {
  return await sitePage.clickPosts();
});

When("I click in new post", async function () {
  return await postsPage.clickNewPost();
});

When("I enter the post title", async function () {
  return await postEditorPage.setTitle(postTitle);
});

When("I enter the post Body", async function () {
  return await postEditorPage.setBody(faker.lorem.paragraphs(1));
});

When("I click the publish post menu", async function () {
  return await postEditorPage.clickPublishMenu();
});

When("I click the publish post page", async function () {
  return await postEditorPage.clickPublisPage();
});

When("I click the back button", async function () {
  return await postEditorPage.clickBack();
});

Then("I see post created", async function () {
  let found = false;
  let elements = await this.driver.$$("h3.gh-content-entry-title");
  for (let element of elements) {
    let textInto = await element.getText();
    if (textInto == postTitle) {
      found = true;
      break;
    }
  }
  expect(found).to.equal(true);
});

Then("I see page created", async function () {
  let found = false;
  let elements = await this.driver.$$("h3.gh-content-entry-title");

  for (let element of elements) {
    let textInto = await element.getText();
    if (textInto == pageTitle) {
      found = true;
      break;
    }
  }

  expect(found).to.equal(true);
});

When("I click in tags", async function () {
  return await sitePage.clickTags();
});

When("I click in new tag", async function () {
  return await tagsPage.clickNewTag();
});

When("I enter the tag name", async function () {
  return await tagsEditorPage.ingresarNombre(tagName);
});

When("I enter the tag color", async function () {
  return await tagsEditorPage.ingresarColor(
    faker.color.rgb({ prefix: "#", casing: "lower" })
  );
});

When("I enter the tag slug", async function () {
  return await tagsEditorPage.ingresarSlug(tagName);
});

When("I enter the tag description", async function () {
  return await tagsEditorPage.ingresarDescripcion(faker.lorem.paragraph(1));
});

When("I click save button", async function () {
  return await tagsEditorPage.guardarTag();
});

Then("I see tag created", async function () {
  let existe = await tagsPage.existTaginList(tagName);

  expect(existe).to.equal(true);
});

When("I click in staff", async function () {
  return await sitePage.clickStaff();
});

When("I click in invite people", async function () {
  return await staffPage.nuevoMiembro();
});

When("I enter the email", async function () {
  return await staffPage.ingresarEmail(emailToInvite);
});

When("I click the send invitation", async function () {
  return await staffPage.invitar();
});

Then("I see invitation created", async function () {
  const existe = await staffPage.existInvitationinList(emailToInvite);

  expect(existe).to.equal(true);
});

When("I click on Scheduled Post", async () => {
  return await sitePage.clickScheduledPost();
});

When("I type the post title", async function () {
  return await postEditorPage.setTitle(postScheduledTitle);
});

When("I type the post Body", async function () {
  return await postEditorPage.setBody(faker.lorem.paragraphs(1));
});

When("I click on publish dropdown menu", async () => {
  await sleep(3000);
  return await scheduledPostPage.clickOnPublishDropdownMenu();
});

When("I select scheduled option", async () => {
  return await scheduledPostPage.selectScheduledRadioButtonOption();
});

When("I select the time input", async () => {
  return await scheduledPostPage.clickOnTimeInput();
});

When("I set a new time for the schedule", async () => {
  const EXTRA_MINUTES = 5;
  const date = new Date();
  let hour = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const withMinutes =
    minutes + EXTRA_MINUTES >= 59 ? EXTRA_MINUTES : minutes + EXTRA_MINUTES;

  hour = minutes + EXTRA_MINUTES >= 59 ? hour + 1 : hour;
  hour = hour > 23 ? 0 : hour;

  await scheduledPostPage.setTime(
    `${hour}:${withMinutes.toString().padStart(2, "0")}`
  );
  await sleep(3000);
});

When("I save the post scheduled", async () => {
  await scheduledPostPage.clickOnScheduledButton();
  await sleep(3000);
});

When("I return to the main page from schedule", async () => {
  await scheduledPostPage.clickOnScheduledLink();
  await sleep(3000);
});

When("I close the scheduled dropdown form", async () => {
  await scheduledPostPage.clickOnCancelScheduledButton();
});

Then("I can see the the new scheduled post", async () => {
  const element = await scheduledPostPage.scheduledPost(postScheduledTitle);

  expect(element).to.equal(true);
});

When("I go to the post published page", async () => {
  await sitePage.clickOnPostPublished();
});

When("I click on general settings", async () => {
  await sitePage.clickOnGeneralSettings();
});

When(
  "I click on expand button of the title and description section",
  async () => {
    await generalSettingsPage.clickOnExpandTitleAndDescriptionButton();
  }
);

When("I edit the page title", async () => {
  await generalSettingsPage.setTitle(newSiteTitle);
});

When("I click on save the setting", async () => {
  await generalSettingsPage.clickOnSaveSettingButton();
});

Then("I check the site title changed", async () => {
  const element = await generalSettingsPage.siteTitle(newSiteTitle);

  expect(element).to.equal(true);
});

When("I click on design", async () => {
  await sitePage.clickOnDesign();
});

When("I type the name for the new menu option", async () => {
  await designSettingPage.setName("Google");
});

When("I type the url for the new menu option", async () => {
  await designSettingPage.setUrl("https://www.google.com/");
});

When("I click on save button in design setting", async () => {
  await designSettingPage.clickOnSaveButton();
});

When("I click on view site", async () => {
  await sitePage.clickOnViewSite();
});

Then("Should exist new google nav option", async () => {
  expect(await designSettingPage.existGoogleNavOption()).to.equal(true);
});

When("I delete the nav menu created", async () => {
  await designSettingPage.clickOnDeleteButton();
});

Then("Should not exist new google nav option", async () => {
  expect(await designSettingPage.notExistGoogleNavOption()).to.equal(true);
});

When("I click on code injection", async () => {
  await sitePage.clickOnCodeInjection();
});

When("I type the code injection", async () => {
  await codeInjectionPage.setCodeEditorLine("Hello World!");
});

When("I save the inject code", async () => {
  await codeInjectionPage.clickOnSaveButton();
});

Then("I check if the code injection exist", async () => {
  const exist = await codeInjectionPage.existHtmlContent();

  expect(exist).to.equal(true);
});

When("I type the an empty post title", async function () {
  return await postEditorPage.setTitle("");
});

When("I type the post Body in a html with apriori data", async function () {
  return await scheduledPostPage.setHtmlEditor(
    `<p>${postApriori.description}</p>`
  );
});

When("I type the post Body with a priori data", async function () {
  const post = getRandomPost();
  return await postEditorPage.setBody(post.description);
});

When("I type the post Title with a prioi data", async function () {
  return await postEditorPage.setTitle(postApriori.title);
});

Then("I can validate the title as Untitled", async () => {
  const UNTITLED = "(Untitled)";
  const element = await scheduledPostPage.scheduledPost(UNTITLED);

  expect(element).to.equal(true);
});

When(
  "I type the post Body in a markdown with pseudo random data",
  async function () {
    const posts = await postClient.getPosts();
    bodyPseudoRandom = posts[0].description;
    await scheduledPostPage.setMarkdownEditor(`# ${bodyPseudoRandom}`);
  }
);

When("I type the post title with pseudo random data", async function () {
  const posts = await postClient.getPosts();
  titlePseudoRandom = posts[0].title;
  return await postEditorPage.setTitle(titlePseudoRandom);
});

Then("I check the data that come from the pseudo random data", async () => {
  const element = await scheduledPostPage.scheduledPost(titlePseudoRandom);

  expect(element).to.equal(true);
});

Then("I check the data that come from the apriori data", async () => {
  const element = await scheduledPostPage.scheduledPost(postApriori.title);

  expect(element).to.equal(true);
});

When("I select the body editor", async () => {
  await scheduledPostPage.selectOnBodyEditor();
});

When("I click on add feature", async () => {
  await scheduledPostPage.clickOnAddFeature();
});

When("I select the markdown feature option", async () => {
  await scheduledPostPage.clickOnMarkdown();
});

When("I select the html feature option", async () => {
  await scheduledPostPage.clickOnHtml();
});

When("I select the bookmark feature option", async () => {
  await scheduledPostPage.clickOnBookmark();
});

When("I type the post url bookmark with a pseudo random data", async () => {
  const post = await postClient.getPosts();
  urlPseudoRandom = post[0].url;
  await scheduledPostPage.setBookmark(urlPseudoRandom, { force: true });
});

When(
  "I need take a screenshot {kraken-string} {kraken-string}",
  async function (name, folder) {
    const fs = require("fs");

    const parentFolderName = "screenshots";

    try {
      if (!fs.existsSync(parentFolderName)) {
        fs.mkdirSync(parentFolderName);
      }
    } catch (err) {
      console.error(err);
    }

    const folderName = "screenshots/" + folder;

    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.error(err);
    }

    return await this.driver.saveScreenshot(
      "screenshots/" + folder + "/" + name + ".png"
    );
  }
);


When("I enter email apriori data", async function () {
  const account = getSigninValidAccount();
  return  await signinPage.setEmail(account.EMAIL);
});

When("I enter password apriori data", async function () {
  const account = getSigninValidAccount();
  return await signinPage.setPassword(account.PASSWORD);
});


When("I enter email no valid apriori data", async function () {
  const account = getRandomAccount();
  return  await signinPage.setEmail(account.email);
});


When("I enter password no valid apriori data", async function () {
  const account = getRandomAccount();
  return  await signinPage.setPassword(account.password);
});

Then("I see error account", async function () {
  const element = await signinPage.existErrorMessage('There is no user with that email address');//'Your password is incorrect');
  expect(element).to.equal(true);
});

Then("I see error password", async function () {
  const element = await signinPage.existErrorMessage('Your password is incorrect');
  expect(element).to.equal(true);
});



When(
  "I enter the tag longer pseudoaleatorio name",
  async function () {
    const tags = await tagClient.getTags();
    const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
    longerName = tags[rand].name;
    await tagsEditorPage.ingresarNombre(`# ${longerName}`);
  }
);

Then("I see error name is longer", async function () {
  const element = await tagsEditorPage.existErrorMessage('Tag names cannot be longer than 191 characters');
  expect(element).to.equal(true);
});


When(
  "I enter the longer tag description",
  async function () {
    const tags = await tagClient.getTagsLongerDescription();
    const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
    longerDescription = tags[rand].description;
    await tagsEditorPage.ingresarDescripcion(`# ${longerDescription}`);
  }
);


Then("I see error description is longer", async function () {
  const element = await tagsEditorPage.existErrorMessage('Description cannot be longer than 500 characters.');
  expect(element).to.equal(true);
});



When(
  "I enter the invalid tag color",
  async function () {
    const tags = await tagClient.getTagsInvalidColor();
    const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
    color = tags[rand].color;
    await tagsEditorPage.ingresarColor(`# ${color}`);
  }
);

Then("I see error invalid color", async function () {
  const element = await tagsEditorPage.existErrorMessage('The color should be in valid hex format');
  expect(element).to.equal(true);
});
