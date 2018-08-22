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
				"task": "Buy Milk"
			}, {
				"task": "Pay Bills"
			}, {
				"task": "Exercise"
			}, {
				"task": "Watch a Movie"
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