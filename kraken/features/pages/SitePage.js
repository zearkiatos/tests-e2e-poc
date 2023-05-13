class SitePage {
  constructor(driver) {
    this.driver = driver;
  }

  get pagesLink() {
    return this.driver.$('a[href="#/pages/"]');
  }

  get postsLink() {
    return this.driver.$('a[href="#/posts/"]');
  }

  get tagsLink() {
    return this.driver.$('a[href="#/tags/"]');
  }

  get staffLink() {
    return this.driver.$('a[href="#/staff/"]');
  }

  get scheduledPost() {
    return this.driver.$('a[href="#/posts/?type=scheduled"]');
  }

  get postPublishedLink() {
    return this.driver.$('a[href="#/posts/?type=published"]');
  }

  get generalSettingsLink() {
    return this.driver.$('a[href="#/settings/general/"');
  }

  get designLink() {
    return this.driver.$('a[href="#/settings/design/"]');
  }

  get viewSiteLink() {
    return this.driver.$('a[href="#/site/"]');
  }

  async irAPaginas() {
    return await this.pagesLink.click();
  }

  async clickPosts() {
    return await this.postsLink.click();
  }

  async clickTags() {
    return await this.tagsLink.click();
  }

  async clickStaff() {
    return await this.staffLink.click();
  }

  async clickScheduledPost() {
    return await this.scheduledPost.click();
  }

  async clickOnPostPublished() {
    return await this.postPublishedLink.click();
  }

  async clickOnGeneralSettings() {
    return await this.generalSettingsLink.click();
  }
  async clickOnDesign() {
    return await this.designLink.click();
  }

  async clickOnViewSite() {
    return await this.viewSiteLink.click();
  }
}

module.exports = SitePage;
