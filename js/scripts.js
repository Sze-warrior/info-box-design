var closeBox = document.querySelectorAll(".close-icon-container");
var showBox = document.querySelectorAll(".show-info");

if(closeBox){
	function closeInfoBox(e){
		var target = e.currentTarget.parentNode;
		Velocity(target, "slideUp", {duration: 200, easing:"ease-in-out"});
		Velocity(showBox, {opacity: 1}, {display: "block", duration:200, delay:210 });
	};

	for(var i = 0; i < closeBox.length; i++){
		closeBox[i].addEventListener("click", closeInfoBox, false);
	};

};

if(showBox){
	function showInfoBox(e){
		var target = e.currentTarget.nextElementSibling;
		Velocity(showBox, "slideDown", { opacity: 0, display: "none", duration:1});
		Velocity(target, "slideDown", {duration: 250, easing:"ease-in-out"});
	};


	for(var i = 0; i < showBox.length; i++){
		showBox[i].addEventListener("click", showInfoBox, false);
	}
};
	