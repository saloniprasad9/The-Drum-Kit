var numberOfButtons = document.querySelectorAll(".button").length;

for( var j =0;j< numberOfButtons ;j++){
    document.querySelectorAll(".button")[j]
     .addEventListener("click",function() {
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress",function(event) {
    sound(event.key);
    animation(event.key);
});


function sound(key) {
    switch  (key) {
        case "d":
            var sound1 = new Audio("audios/mixkit-achievement-win-drums-555.wav");
            sound1.play();
            break;

        case "r":
            var sound2 = new Audio("audios/mixkit-cool-impact-movie-trailer-2909.wav");
            sound2.play();
            break; 
            
        case "u":
            var sound3 = new Audio("audios/mixkit-drum-bass-hit-2294.wav");
            sound3.play();
            break;   
            
        case "m":
            var sound4 = new Audio("audios/mixkit-fail-drum-and-bells-571.wav");
            sound4.play();
            break;  
            
       case "k":
            var sound5 = new Audio("audios/mixkit-fail-drum-and-xylophone-568.wav");
            sound5.play();
            break; 
            
       case "i":
            var sound6 = new Audio("audios/mixkit-joke-drums-578.wav");
            sound6.play();
            break;   

       case "t":
            var sound7 = new Audio("audios/mixkit-ominous-drums-appear-228.wav");
            sound7.play();
            break;      
        
            
        default: console.log(key);    
    }
}


function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
        activeButton.classList.remove("animation");
    }, 100);
}
