function afficher(cardClass) {
	var img = document.getElementById(cardClass);
	img.style.zIndex = 11;
	
	//img.src = "empty.jpg";
}

function lacher(cardClass, zIndex) {
	var img = document.getElementById(cardClass);
	img.style.zIndex = zIndex;
	
	//img.src = "cover.jpg";
}