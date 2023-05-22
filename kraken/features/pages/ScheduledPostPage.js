class ScheduledPostPage {
  constructor(driver) {
    this.driver = driver;
  }

  get responseError() {
    return this.driver.$$("div.gh-date-time-picker-error");
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

  get bodyEditor() {
    return this.driver.$(
      ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    );
  }

  get addFeature() {
    return this.driver.$(
      "button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
    );
  }

  get markdownButton() {
    return this.driver.$("div[title='Markdown']");
  }

  get htmlButton() {
    return this.driver.$("div[title='HTML']");
  }

  get bookmarkButton() {
    return this.driver.$("div[title='Bookmark']");
  }

  get markdownEditor() {
    return this.driver.$$(".CodeMirror-line")[1];
  }

  get htmlEditor() {
    return this.driver.$$(".CodeMirror-line")[1];
  }

  get bookmark() {
    return this.driver.$("input[name='url']");
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

  selectOnBodyEditor() {
    this.bodyEditor.click();
  }

  clickOnAddFeature() {
    this.addFeature.click();
  }

  clickOnMarkdown() {
    this.markdownButton.click();
  }

  clickOnHtml() {
    this.htmlButton.click();
  }

  clickOnBookmark() {
    this.bookmarkButton.click();
  }

  setMarkdownEditor(markdownCode) {
    this.markdownEditor.click();
    this.markdownEditor.type(markdownCode);
  }

  setHtmlEditor(htmlCode) {
    this.htmlEditor.click();
    this.htmlEditor.type(htmlCode);
  }

  setBookmark(url) {
    this.bookmark.click();
    this.bookmark.type(url);
  }
}

module.exports = ScheduledPostPage;
