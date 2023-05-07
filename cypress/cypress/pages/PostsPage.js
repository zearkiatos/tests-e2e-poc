class PostsPage {
    
    newPostLink=()=>cy.contains('New post')


    nuevoPost = () => {
        this.newPostLink().click()
    }
  
   
  }

export default PostsPage;