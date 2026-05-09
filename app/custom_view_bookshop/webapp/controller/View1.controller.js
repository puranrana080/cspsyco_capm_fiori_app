sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("customviewbookshop.controller.View1", {
        onInit() {
        },
        submit:function(){
            var title  = this.getView().byId('title').getValue();
            var author  = this.getView().byId('author').getValue();
            var price  = this.getView().byId('price').getValue();
            var stock  = this.getView().byId('stock').getValue();
            var location  = this.getView().byId('location').getValue();
            var genre  = this.getView().byId('genre').getValue();

            var oModel = this.getView().getModel()
            
           var oContext = oModel.bindList("/Books").create({
            "title":title,
            "author":author,
            "price":price,
            "stock":stock,
            "location":location,
            "genre":genre
           })
           oContext.created().then(()=>{
            MessageBox.success("Product Added Successfully")
            this.getView().byId('title').setValue(null)
            this.getView().byId('author').setValue(null)
            this.getView().byId('price').setValue(null)
            this.getView().byId('stock').setValue(null)
            this.getView().byId('location').setValue(null)
            this.getView().byId('genre').setValue(null)

           }).catch((err)=>{
            MessageBox.error("an error while creating")
            console.error("Error Adding Item"+err)
           })
        }

        
    });
});