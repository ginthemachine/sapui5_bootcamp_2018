sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("bootcamptodolist.controller.Home", {
		showSum: function() {
			var a = 1;
			var b = "5";
			alert(a + b);
		}
	});
});