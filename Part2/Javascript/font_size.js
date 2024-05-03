//Author Fraser McCruden
//Supporting javascript file to enable the user to change the size of the text


//Setting the default font size
var fontSize = 16;

//Functiom that will increase the font size by 1 until it reaches the max of 18px
function increaseFontSize() {
	if (fontSize < 18) {
		fontSize++;
		updateFontSize();
	}
}

//Functiom that will decrease the font size by 1 until it reaches the max of 15px
function decreaseFontSize() {
	if (fontSize > 15) {
		fontSize--;
		updateFontSize();
	}
}

//Function that updates the font size to the webpage
function updateFontSize() {
	var emptyBoxes = document.querySelectorAll('.text');
	emptyBoxes.forEach(function(box) {
		box.style.fontSize = fontSize + 'px';
	});
}