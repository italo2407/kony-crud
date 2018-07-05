define(function() {
    var controller = require("com/demo/mainBar/usermainBarController");
    var actions = require("com/demo/mainBar/mainBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});