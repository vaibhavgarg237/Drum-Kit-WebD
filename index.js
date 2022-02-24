var n = document.querySelectorAll(".drum").length;

//Keyboard key Pressed
document.addEventListener("keypress", function(event) {
    //event.key is the character pressed, use this to check the key pressed
    makeSound(event.key);
    addAnimation(event.key);
});

//Mouse Click Pressed
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //on click, play exact sound
        var letter = this.innerHTML; //character pressed
        makeSound(letter);
        addAnimation(letter);
        //this.style.color = "white";
    })
}

//Make Sound
function makeSound(letter_pressed) {
    switch (letter_pressed) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Other key pressed");
            break;
    }
}

//Add Animation
function addAnimation(key) {
    var selectedKey = document.querySelector("." + key);
    selectedKey.classList.add("pressed");
    setTimeout(
        function() {
            selectedKey.classList.remove("pressed")
        }, 100);
    // clearTimeout(tem);

}