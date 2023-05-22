class GeneralSettingsPage {
  constructor(driver) {
    this.driver = driver;
  }

  get expandTitleAndDescriptionButton() {
    return this.driver.$$(".gh-btn")[1];
  }

  get expandTimezoneButton() {
    return this.driver.$$(".gh-btn")[2];
  }

  get expandSiteMeta() {
    return this.driver.$$(".gh-btn")[5];
  }

  get expandLanguageButton() {
    return this.driver.$$(".gh-btn")[3];
  }

  get expandSocialMediaButton() {
    return this.driver.$$(".gh-btn")[7];
  }

  get saveSettingButton() {
    return this.driver.$$(".gh-btn")[0];
  }

  get title() {
    return this.driver.$("input.ember-text-field.gh-input.ember-view");
  }

  get description() {
    return this.driver.$$("input.ember-text-field.gh-input.ember-view")[1];
  }

  get timezone() {
    return this.driver.$("#timezone");
  }

  get metaTitle() {
    return this.driver.$("#metaTitle");
  }

  get getSiteTitle() {
    return this.driver.$$("div.gh-nav-menu-details-blog")[0];
  }

  get language() {
    return this.driver.$$("input.gh-input")[0];
  }

  async clickOnExpandTitleAndDescriptionButton() {
    return await this.expandTitleAndDescriptionButton.click();
  }

  async clickOnExpandSocialMediaButton() {
    return await this.expandSocialMediaButton.click();
  }

  async clickOnExpandLanguageButton() {
    return await this.expandLanguageButton.click();
  }

  async clickOnExpandTimezoneButton() {
    return await this.expandTimezoneButton.click();
  }

  async clickOnExpandSiteMeta() {
    return await this.expandSiteMeta.click();
  }

  async setTitle(title) {
    return await this.title.setValue(title);
  }

  async setDescription(description) {
    return await this.description.setValue(description);
  }

  async setMetaTitle(metaTitle) {
    return await this.metaTitle.setValue(metaTitle);
  }

  async clickOnSaveSettingButton() {
    return await this.saveSettingButton.click();
  }

  async siteTitle(title) {
    let found = false;
    let elements = await this.driver.$$("div.gh-nav-menu-details-blog");

    for (let element of elements) {
      let textInto = await element.getText();
      found = textInto == title;
      if (found) break;
    }

    return found;
  }

  async getMetaTitle(metaTitle) {
    let found = false;
    let elements = await this.driver.$$("#metaTitle");

    for (let element of elements) {
      let textInto = await element.getValue();
      found = textInto == metaTitle;
      if (found) break;
    }

    return found;
  }

  async getLanguage(language) {
    let found = false;
    let elements = await this.driver.$$("input.gh-input");

    for (let element of elements) {
      let textInto = await element.getValue();
      found = textInto == language;
      if (found) break;
    }

    return found;
  }

  async selectTimezone(timezone) {
    await this.driver.execute((timezone) => {
      const selectbox = document.getElementById("timezone");
      selectbox.value = timezone;
    }, timezone);
  }

  async getSelectedTimezone(timezone) {
    return await this.driver.$(`[value="${timezone}"]`);
  }

  async setLanguage(language) {
    return await this.language.setValue(language);
  }
}

module.exports = GeneralSettingsPage;
