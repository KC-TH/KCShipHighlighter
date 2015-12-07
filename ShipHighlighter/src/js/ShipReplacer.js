(function() {
	"use strict";
	
	window.ShipReplacer = {
			_database:{},
			
			
			init:function() {
				this._database = window.ShipDatabase;
			},
			
			runReplacer:function($elements) {
				$elements.addClass('highlighted-ship')
						.each(function() {
							var jpName = $(this).text();
							var readableName = ShipReplacer._database.getShipName(jpName);
							
							if(readableName != null && readableName != jpName) {
								$(this).text(readableName + " / " + jpName)
							}
						})
			}
	}
})()