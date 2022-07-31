// Detecting the button press
// Adding Event Listener to all the button using for Loop and query Selector
var numberOFButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOFButtons; i++) {
     document.querySelectorAll("button")[i].addEventListener("click", function () {
          // (this.style.color = "white");  // this gives the value of the element in js

          var buttonInnerHTML = this.innerHTML;
          makeSound(buttonInnerHTML);
          buttonAnimation(buttonInnerHTML);

     });


// Detecting the key press

document.addEventListener("keydown", function (event) {
     makeSound(event.key);
     buttonAnimation(event.key);
});

}

function makeSound(key) {
     switch (key) {
          case "w":
               var tom1 = new Audio("tom-1.mp3");
               tom1.play();   // play is the function
               break;
          case "a":
               var tom2 = new Audio("tom-2.mp3");
               tom2.play();   // play is the function
               break;
          case "s":
               var tom3 = new Audio("tom-3.mp3");
               tom3.play();   // play is the function
               break;

          case "d":
               var tom4 = new Audio("tom-4.mp3");
               tom4.play();   // play is the function
               break;
          case "j":
               var snare = new Audio("snare.mp3");
               snare.play();   // play is the function
               break;
          case "k":
               var crash = new Audio("crash.mp3");
               crash.play();   // play is the function
               break;
          case "l":
               var kickBass = new Audio("kick-bass.mp3");
               kickBass.play();   // play is the function
               break;
          default:
              console.log(buttonInnerHTML);
     }

}
function buttonAnimation(currentKey){

     var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");
      
      setTimeout(function(){
           activeButton.classList.remove("pressed");

      }, 100);

}









