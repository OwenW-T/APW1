// local JavaScript (js) code wrapped into website at runtime
// Image switcher code

var myImage = document.querySelector('img');                      // declare/define variable 'myImage', note lines end with ;

myImage.onclick = function() {                                    // this is a java script (js) function, runs on mouse click
	var mySrc = myImage.getAttribute('src');                        // creates a variable to hold an image
	if(mySrc === 'images/Trevor Logo.png') {                        // checks for the original image. note '===' for comparison operator
      myImage.setAttribute ('src','images/bad error.PNG');        // if it is, fake error message
	} else {
	  myImage.setAttribute ('src','images/Exploding_Computer.jpg'); // if not, burning laptop
	}                                                               // note braces used to deliniate blocks
}

// Personalized welcome message code

var myButton = document.querySelector('button');                  // creates button variable for js
var myHeading = document.querySelector('h1');                     // creates var for h1 style header

function setUserName() {                                          // another js function, this one called internally later on
  var myName = prompt('Please enter your name.');                 // local var from prompt (built-in js function)
  localStorage.setItem('name', myName);                           // store var in local storage using (hash?)keyword 'name'
  myHeading.innerHTML = 'Hey ' + myName + ', you pressed the button!';   // add this text to the html of the h1 style object
}

if(!localStorage.getItem('name')) {                               // checks for existence of value for 'name' in local storage
  setUserName();                                                  // if null, call above function
} else {
  var storedName = localStorage.getItem('name');                  // load item referenced by 'name' in local storage into var storedName
  myHeading.innerHTML = 'Coding is cool, ' + storedName;          // update H1 style object
}

myButton.onclick = function() {                                   // mouse click calls 'setUserName()' function
  setUserName();
}