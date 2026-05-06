sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("customviewbookshop.controller.View1", {
        onInit() {
        },
        submit:function(){
            alert("test")
        }

        
    });
});