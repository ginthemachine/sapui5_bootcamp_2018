sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"bootcamptodolist/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("bootcamptodolist.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// Change parameter to test OneWay, TwoWay, OneTime
			this.setModel(models.createSampleModel("OneWay"), "sampleModel");
			// takes effect since we modified the model directly, not from UI
			// this.getModel("sampleModel").setProperty("/description", "hey hey hey");

			// this.setModel(models.createSampleModel("TwoWay"), "sampleModel");

			// this.setModel(models.createSampleModel("OneTime"), "sampleModel");
			// This will note take effect due to "OneTime"
			// this.getModel("sampleModel").setProperty("/description", "hey hey hey");

			// set the to-do model
			this.setModel(models.createTodoModel(), "todo");
		}
	});
});