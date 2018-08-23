sap.ui.define([], function() {
	"use strict";

	var Formatter = {

		fnFormatStatus: function(iStatus) {
			switch (iStatus) {
				case 1:
					return "Pending";
				case 2:
					return "Done";
				case 3:
				default:
					return "On-going";
			}
		}
	};

	return Formatter;
}, /* bExport= */ true);