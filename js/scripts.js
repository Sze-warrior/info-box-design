var closeInfoBox = document.querySelectorAll(".cross-icon-container");
var showBox = document.querySelectorAll(".show-info-box");

if(closeInfoBox){

	function closeBox(e){
		var target = e.currentTarget;//selects current target as the cross icon clicked
		var targetParent = target.parentNode;//travels up to the info-box class as its parent
		var targetGrandparent = targetParent.parentNode;//travels up to the info-box-container class as its grandparent
		var showBox = targetGrandparent.children[0];//Selects its first child in this case the show-info-box class

		targetParent.classList.add("hide");
		targetGrandparent.classList.add("no-border");
		showBox.classList.add("show");
	};

	for(var i = 0; i < closeInfoBox.length; i++){
		closeInfoBox[i].addEventListener("click", closeBox, false);
	}

};


if(showBox){

	function openBox(e){
		var target = e.currentTarget;//selects current target as the show-info-box clicked
		var targetParent = target.parentNode;//travels up to the how-info-box as its parent
		var showInfo = targetParent.children[1];//Selects its second child in this case the info-box class

		targetParent.classList.remove("no-border");
		showInfo.classList.remove("hide");
		e.currentTarget.classList.remove("show");
	};

	for(var i = 0; i < showBox.length; i++){
		showBox[i].addEventListener("click", openBox, false);
	}

}
