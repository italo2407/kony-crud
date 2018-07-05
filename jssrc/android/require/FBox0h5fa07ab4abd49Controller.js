define(function(){
	var controller = require("userFBox0h5fa07ab4abd49Controller");
	var controllerActions = ["FBox0h5fa07ab4abd49ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})