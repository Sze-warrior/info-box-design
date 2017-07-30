var closeBox = document.querySelectorAll(".close-icon-container");
var showBox = document.querySelectorAll(".show-info-box");
	
if(closeBox){

	function closeInfoBox(e){
		var target = e.currentTarget.parentNode;
		Velocity(target, "slideUp", {duration: 200, easing:"ease-in-out"});
	};


	for(var i = 0; i < closeBox.length; i++){
		closeBox[i].addEventListener("click", closeInfoBox, false);
	}

};
