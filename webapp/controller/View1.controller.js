sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oData = {
                    milk : [
                        { Week : '1주차', Revenue : 1000, Cost : 2000 },
                        { Week : '2주차', Revenue : 2000, Cost : 2500 },
                        { Week : '3주차', Revenue : 2500, Cost : 2100 },
                        { Week : '4주차', Revenue : 1500, Cost : 2600 }
                    ]
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel); 

                var oVizFrame = this.byId("idVizFrame");
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());

            }
        });
    });
