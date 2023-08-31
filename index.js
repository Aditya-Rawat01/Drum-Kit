var i=0;
for (var i=0;i<=6;i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var input=this.innerHTML;
    clicked(input);
    animation(input);
});
 
}

function clicked(input) {
    var audio;
    if (input==="w") {
        audio = new Audio("sounds/tom-1.mp3");
        
    }
    else if (input==="a") {
        audio=new Audio("sounds/tom-2.mp3");
    }
    else if (input==="s") {
        audio=new Audio("sounds/tom-4.mp3");
    }
    else if (input==="d") {
        audio=new Audio("sounds/tom-3.mp3");
    }
    else if (input==="j") {
        audio=new Audio("sounds/kick-bass.mp3");
    }
    else if (input==="k") {
        audio=new Audio("sounds/snare.mp3");
    }
    else if (input==="l") {
        audio=new Audio("sounds/crash.mp3");
    }
    audio.play();
    
}
var key;
document.addEventListener("keydown",function(event) {
 key=event.key;
 clicked(event.key);
 animation(event.key);

})
function animation(input) {
 document.querySelector("."+input).classList.add("pressed");

setTimeout(function() {
   document.querySelector("."+input).classList.remove("pressed"); 
 },100);
}


