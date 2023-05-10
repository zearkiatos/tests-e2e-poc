class SitePage {
  pagesLink = () => cy.contains("Pages");
  postsLink = () => cy.contains("Posts");
  tagsLink = () => cy.contains("Tags");
  staffLink = () => cy.contains("Staff");
  scheduledPost = () => cy.contains("Scheduled");
  viewSiteLink = () => cy.contains("View site")

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
}

export default SitePage;
