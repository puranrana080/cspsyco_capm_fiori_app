sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
], (Controller, MessageBox, Fragment) => {
    "use strict";

    return Controller.extend("customviewbookshop.controller.View1", {
        onInit() {
        },
        submit: function () {
            var title = this.getView().byId('title').getValue();
            var author = this.getView().byId('author').getValue();
            var price = this.getView().byId('price').getValue();
            var stock = this.getView().byId('stock').getValue();
            var location = this.getView().byId('location').getValue();
            var genre = this.getView().byId('genre').getValue();

            var oModel = this.getView().getModel()

            var oContext = oModel.bindList("/Books").create({
                "title": title,
                "author": author,
                "price": price,
                "stock": stock,
                "location": location,
                "genre": genre
            })
            oContext.created().then(() => {
                MessageBox.success("Product Added Successfully")
                this.getView().byId('title').setValue(null)
                this.getView().byId('author').setValue(null)
                this.getView().byId('price').setValue(null)
                this.getView().byId('stock').setValue(null)
                this.getView().byId('location').setValue(null)
                this.getView().byId('genre').setValue(null)

            }).catch((err) => {
                MessageBox.error("an error while creating")
                console.error("Error Adding Item" + err)
            })
        },
        onCollapseExpandPress() {
            const oSideNavigation = this.byId("sideNavigation"),
                bExpanded = oSideNavigation.getExpanded();

            oSideNavigation.setExpanded(!bExpanded);
        },
        onAddBookPressed() {
            this.hideAllPanels();
            var oPanel = this.byId('Panel1');
            oPanel.setVisible(true)
        },
        onViewDetailsBookPressed() {
            this.hideAllPanels();
            var oPanel = this.byId('Panel2');
            oPanel.setVisible(true)
        },
        hideAllPanels() {
            this.byId('Panel1').setVisible(false);
            this.byId('Panel2').setVisible(false);
        },
        onActionPressed: function (oEvent) {
            var oButton = oEvent.getSource();
            var oContext = oButton.getBindingContext();
            this._oSelectedContext = oContext
            if (!this._oActionSheet) {
                Fragment.load({
                    id: this.getView().getId(),
                    name: "customviewbookshop.view.ActionSheet",
                    controller: this
                }).then(function (oActionSheet) {
                    this._oActionSheet = oActionSheet;
                    this.getView().addDependent(this._oActionSheet);
                    this._oActionSheet.openBy(oButton);

                }.bind(this));
            }
            else {
                this._oActionSheet.openBy(oButton)
            }

        },
        onDeletePress: function () {
            var oContext = this._oSelectedContext;
            var sBookId = oContext.getProperty("ID")
            MessageBox.confirm("Are you sure you want to Delete this book with Id" + sBookId + "?", {
                actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                onClose: function (oAction) {
                    if (oAction === MessageBox.Action.YES) {
                        oContext.delete("$direct").then(function () {
                            MessageBox.success("Book ID:" + sBookId + "deleted successfully")
                        }).catch(function (oError) {
                            MessageBox.error("Error deleting Book Id:" + sBookId + "." + oError + "Please try later")
                        })
                    }
                }
            })

        }


    });
});