document.addEventListener('keydown', PlaySound);
document.querySelectorAll('.soundPad').forEach(button =>{
    button.addEventListener('click',()=>{
        PlaySound({key : button.dataset.key})
    });
});

function PlaySound(e){

    let key = e.key.toUpperCase();
    let sound;
    console.log("Key pressed:", key);

    switch(key){
        case 'A':
            sound = new Audio("sound/drum1.wav");
            break;
         case 'S':
            sound = new Audio("sound/drum_bass.wav");
            break;
         case 'D':
            sound = new Audio("sound/crash_1.mp3");
            break;
         case 'F':
            sound = new Audio("sound/crash_2.mp3");
            break;
         case 'G':
            sound = new Audio("sound/tom1.mp3");
            break;
        default:
            return;
    }
    sound.play();

}