class TagsEditorPage {

    constructor(driver){
        this.driver=driver;
    }

    get name(){
        return this.driver.$('input[name="name"]');
    }

    get slug(){
        return this.driver.$('input[name="slug"]');
    }

    get color(){
        return this.driver.$('input[name="accent-color"]');
    }

    get description(){
        return this.driver.$('textarea[name="description"]');
    }

    get guardarButton(){
        return this.driver.$('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    }

    async ingresarNombre(nombre){
        return await this.name.setValue(nombre);
    }

    async ingresarSlug(slugt){
        return await this.slug.setValue(slugt);
    }

    async ingresarColor(colort){
        let myColor=colort.replace("#","")
        return await this.color.setValue(myColor);
    }

    async ingresarDescripcion(descripcion){
        return await this.description.setValue(descripcion);
    }

    async guardarTag(){
        return await this.guardarButton.click();
    }


    async existErrorMessage(message){
        let index=-1;
        let elements = await this.driver.$$("p.response");
        for (let i = 0; i < elements.length; i++) {
            let textInto=await elements[i].getText();
            console.log('al inicio ' +textInto +' al fin');
            if(textInto.includes(message)){
                index=i;
                break;
            }
        }
        return index>-1;
    }
    
}

module.exports = TagsEditorPage;


