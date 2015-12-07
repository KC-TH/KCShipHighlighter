(function() {
	ShipDatabase.init();
	
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var newNodes = mutation.addedNodes;
			if (newNodes !== null) {
				var $nodes = $(newNodes);
				$nodes.each(function() {
					var $node = $(this);
					if (this.nodeName.toLowerCase() == 'tbody' || this.nodeName.toLowerCase() == 'tr') {
						$(this).find('td:nth-child(2):not(.highlighted-ship)')
								.addClass('highlighted-ship')
								.each(function() {
									var jpName = $(this).text();
									var readableName = ShipDatabase.getShipName(jpName);
									
									if(readableName != null && readableName != jpName) {
										$(this).text(readableName + " / " + jpName)
									}
								})
					}
				});
			}
		});
	});
	
	var config = {
		attributes : true,
		childList : true,
		characterData : true,
		subtree : true
	};
	
	$("table").each(function() {
		observer.observe(this, config);
	})
})()
