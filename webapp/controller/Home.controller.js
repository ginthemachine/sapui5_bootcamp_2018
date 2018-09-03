sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"bootcamptodolist/util/Formatter"
], function(Controller, Formatter) {
	"use strict";

	return Controller.extend("bootcamptodolist.controller.Home", {
		/**
		 * Copy of formatter module 
		 */
		formatter: Formatter,
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf bootcamptodolist.view.Home
		 */
		onInit: function() {
			alert("Hello from init");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf bootcamptodolist.view.Home
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf bootcamptodolist.view.Home
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf bootcamptodolist.view.Home
		 */
		onExit: function() {

		},

		/**
		 * Event handler for button
		 * @memberOf bootcamptodolist.view.Home
		 */
		onPressButton: function(oEvent) {
			alert("Hello from button");
			this._myPrivateFunction();
		},
		
		/**
		 * Event handler for item press
		 * @memberOf bootcamptodolist.view.Home
		 */
		onPressItem: function(oEvent){
			alert("Hello from item");
		},

		/**
		 * Function called from onPressButton
		 * @memberOf bootcamptodolist.view.Home
		 */
		_myPrivateFunction: function() {
			alert("Hello from private function.");
		}
	});
});