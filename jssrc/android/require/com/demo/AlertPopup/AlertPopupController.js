define(function() {
    var controller = require("com/demo/AlertPopup/userAlertPopupController");
    var actions = require("com/demo/AlertPopup/AlertPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onFirstBtnClick_dbe83a807b8f45a0b17fdbb4419a772e = function() {
        if (this.onFirstBtnClick) {
            this.onFirstBtnClick.apply(this, arguments);
        }
    }
    return controller;
});