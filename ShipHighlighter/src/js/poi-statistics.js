(function() {
	ShipDatabase.init();
	ShipReplacer.init();
	
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			var newNodes = mutation.addedNodes;
			if (newNodes !== null) {
				var $nodes = $(newNodes);
				$nodes.each(function() {
					var $node = $(this);
					if (this.nodeName.toLowerCase() == 'tbody' || this.nodeName.toLowerCase() == 'tr') {
						ShipReplacer.runReplacer($(this).find('td:nth-child(2):not(.highlighted-ship)'));
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
		ShipReplacer.runReplacer($(this).find('td:nth-child(2):not(.highlighted-ship)'));
		observer.observe(this, config);
	})
})()
