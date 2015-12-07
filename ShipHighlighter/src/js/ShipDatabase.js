(function() {
	"use strict";

	window.ShipDatabase = {
		_data : {},

		
		init:function() {
			this._data = JSON.parse($.ajax(chrome.extension.getURL('/data/ships.json'), { async : false }).responseText);
		},
		
		getShipName:function(jpName) {
			return this._data[jpName];
		}
	}
})()