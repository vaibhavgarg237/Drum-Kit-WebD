var n = document.querySelectorAll(".drum").length;

//looping and adding event listeners to each button
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //on click, play exact sound


        //console.log(this.innerText);
        //this.style.color = "white";
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
    })
}