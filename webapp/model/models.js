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
			}];
			var oModel = new JSONModel(oData);
			return oModel;
		}

	};
});