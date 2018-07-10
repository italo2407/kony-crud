define(function() {
    var controller = require("com/demo/ConfirmationPopup/userConfirmationPopupController");
    var actions = require("com/demo/ConfirmationPopup/ConfirmationPopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});