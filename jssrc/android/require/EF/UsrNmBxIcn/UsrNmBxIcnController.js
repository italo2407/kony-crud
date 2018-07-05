define(function() {
    var controller = require("EF/UsrNmBxIcn/userUsrNmBxIcnController");
    var actions = require("EF/UsrNmBxIcn/UsrNmBxIcnControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});