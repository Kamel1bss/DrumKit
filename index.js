for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        makeSound(this.innerHTML);
        animation(this.innerHTML);
    })
}

document.addEventListener("keypress" , function(event) {
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key) {

    switch(key) {
        case "w" :
        myAudio = new Audio("sounds/tom-1.mp3")
        myAudio.play();
        break;
        case "a" :
        myAudio = new Audio("sounds/tom-2.mp3")
        myAudio.play();
        break;
        case "s" :
        myAudio = new Audio("sounds/tom-3.mp3")
        myAudio.play();
        break;
        case "d" :
        myAudio = new Audio("sounds/tom-4.mp3")
        myAudio.play();
        break;
        case "j" :
        myAudio = new Audio("sounds/snare.mp3")
        myAudio.play();
        break;
        case "k" :
        myAudio = new Audio("sounds/kick-bass.mp3")
        myAudio.play();
        break;
        case "l" :
        myAudio = new Audio("sounds/crash.mp3")
        myAudio.play();
        break;
    }

}




function animation(key) {
    for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].classList.remove("pressed");
    }
    document.querySelector(`.${key}`).classList.add("pressed");
}