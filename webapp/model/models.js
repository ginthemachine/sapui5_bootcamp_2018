sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createTodoModel: function() {
			var oData = [{
				"task": "Buy Milk",
				"description": "Buy milk at supermarket near you.",
				"status": 1
			}, {
				"task": "Pay Bills",
				"description": "Pay bills online.",
				"status": 2
			}, {
				"task": "Exercise",
				"description": "Visit the gym near you.",
				"status": 3
			}, {
				"task": "Watch a Movie",
				"description": "Buy tickets for the movies.",
				"status": 1
			}];
			var oModel = new JSONModel(oData);
			return oModel;
		},

		createSampleModel: function(sBindingMode) {
			var oData = {
				"description": "lorem ipsum"
			};
			var oModel = new JSONModel(oData);
			oModel.setDefaultBindingMode(sBindingMode);
			return oModel;
		}

	};
});