function moveDivisor(divnum) { 
foreImage = document.getElementsByClassName("img foreground-img"+divnum)[0];
slider = document.getElementById("slider"+divnum);
sliderArrows = document.getElementsByClassName("slider-arrows"+divnum)[0];	
	foreImage.style.width = slider.value+"%";
	sliderArrows.style.left = slider.value+"%";
}