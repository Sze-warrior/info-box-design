var closeInfoBox = document.querySelectorAll(".info-box");
var showMore = document.querySelectorAll(".show-info-box");


if(closeInfoBox || showMore){

	function closeBox(e){
		var target = e.currentTarget;//selects current target as the cross icon clicked
		var openInfoBox = target.parentNode.children[1];

		target.classList.add("hide");
		openInfoBox.classList.add("show");
	};

	function showInfoBox(e){
		var target = e.currentTarget;//selects current target as the show me more link clicked
		var openInfoBox = target.parentNode.children[0];

		openInfoBox.classList.remove("hide");
		target.classList.remove("show");
	};	


	for(var i = 0; i < closeInfoBox.length; i++){
		closeInfoBox[i].addEventListener("click", closeBox, false);
	}

	for(var i = 0; i < showMore.length; i++){
		showMore[i].addEventListener("click", showInfoBox, false);
	}

};