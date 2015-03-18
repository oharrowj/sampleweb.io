var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/glory-logo.png') {
		myImage.setAttribute('src','images/global-logo.gif');
	}
	else {
		myImage.setAttribute('src','images/glory-logo.png');
	}
}
