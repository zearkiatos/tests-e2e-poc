class ScheduledPostPage {
  constructor(driver) {
    this.driver = driver;
  }

  get scheduledLink() {
    return this.driver.$(".blue.link.fw4.flex.items-center.active.ember-view");
  }

  get publishDropdownMenu() {
    return this.driver.$("div[aria-expanded='false']");
  }

  get radioScheduledOption() {
    return this.driver.$$(
      "div.gh-publishmenu-radio>div.gh-publishmenu-radio-button"
    )[1];
  }

  get selectTimeInput() {
    return this.driver.$(".gh-date-time-picker-time>input");
  }

  get time() {
    return this.selectTimeInput;
  }

  get scheduledButton() {
    return this.driver.$(
      ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    );
  }

  get cancelScheduledButton() {
    return this.driver.$(".gh-btn.gh-btn-outline.gh-btn-link");
  }

  async scheduledPost(title) {
    let index = -1;
    let elements = await this.driver.$$("h3.gh-content-entry-title");
    for (let i = 0; i < elements.length; i++) {
      let textInto = await elements[i].getText();
      
      if (textInto == title) {
        index = i;
        break;
      }
    }
    return index != -1;
  }

  clickOnScheduledLink() {
    this.scheduledLink.click();
  }

  clickOnPublishDropdownMenu() {
    this.publishDropdownMenu.click();
  }

  selectScheduledRadioButtonOption() {
    this.radioScheduledOption.click();
  }

  clickOnTimeInput() {
    this.selectTimeInput.click();
  }

  setTime(time) {
    this.time.setValue(time);
  }

  async getTime() {
    return await this.time.getText();
  }

  clickOnScheduledButton() {
    this.scheduledButton.click();
  }

  clickOnCancelScheduledButton() {
    this.cancelScheduledButton.click();
  }
}

module.exports = ScheduledPostPage;
