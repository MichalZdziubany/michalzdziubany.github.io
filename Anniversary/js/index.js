const heartBtn = document.querySelector(".heartBtn");
var imageSources = ["images/pic0.jpg", "images/pic1.jpg", "images/pic2.jpg","images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"
					, "images/pic6.jpg", "images/pic7.jpg","images/pic8.jpg", "images/pic9.jpg", "images/pic10.jpg"
					, "images/pic11.jpg", "images/pic12.jpg","images/pic13.jpg", "images/pic14.jpg", "images/pic15.jpg"
					, "images/pic16.jpg"];
					
let index = 0;
let btnClicked = 0;
var x = document.getElementById("myAudio");

heartBtn.addEventListener("click", () => {
	if(btnClicked == 0){
		updateSlides();
		btnClicked = 1;
		document.getElementById("countdownContainer").style.display = "block";
		document.getElementById("qouteContainer").style.display = "none";
		x.volume = 0.2;
		x.play();
	}
	else if(btnClicked == 1){
		btnClicked = 2;
		document.getElementById("countdownContainer").style.display = "none";
		document.getElementById("qouteContainer").style.display = "block";
	}
	else if(btnClicked == 2){
		btnClicked = 1;
		document.getElementById("countdownContainer").style.display = "block";
		document.getElementById("qouteContainer").style.display = "none";
	}
});

function updateSlides() {
	document.getElementById("myImg").src = imageSources[index];
	index++
  
	if(index == imageSources.length){index = 0;}
  
	setTimeout(updateSlides, 5500);
}