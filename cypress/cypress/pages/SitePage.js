class SitePage {
  pagesLink = () => cy.contains("Pages");
  postsLink = () => cy.contains("Posts");
  tagsLink = () => cy.contains("Tags");
  staffLink = () => cy.contains("Staff");
  scheduledPost = () => cy.contains("Scheduled");
  viewSiteLink = () => cy.contains("View site");

  profileLink = () => cy.contains("Your Profile");
  aboutLink = () => cy.contains("About Ghost");

  resourceLink = () => cy.visit("https://ghost.org/resources/");

  irAPaginas = () => {
    this.pagesLink().click();
  };

  irAPosts = () => {
    this.postsLink().click();
  };

  irAStaff = () => {
    this.staffLink().click();
  };

  irATags = () => {
    this.tagsLink().click();
  };

  goToScheduledPost = () => {
    this.scheduledPost().click();
  };

  goToViewSite = () => {
    this.viewSiteLink();
  };
  irAProfile = () => {
    this.profileLink().click();
  };

  irAbouth = () => {
    this.aboutLink().click();
  };

  irAResource = () => {
    this.resourceLink();
  };
}

export default SitePage;
