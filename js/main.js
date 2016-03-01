(function() {

 var button = document.getElementsByClassName('accordion__header');

for (var key in button) {

			button[key].onclick = function(e) {
					if (this.className == "accordion__header accordion__block_expanded") {
						this.nextElementSibling.className = "expanding_block expanding_block_hidden";
						this.className = "accordion__header";  	
					} else {
						this.className = "accordion__header accordion__block_expanded";
						this.nextElementSibling.className = "expanding_block expanding_block_visible";
					}
			}
	}
})();