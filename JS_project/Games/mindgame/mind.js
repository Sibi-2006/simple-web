let btn=document.getElementById('btn')
let nextmove=document.getElementById('nextmove');
let index=0;

let steps=[
  "Think of any number in your mind (Don't tell me!)",
  "Multiply it by 2",
  "Now add 10 to the result",
  "Divide the result by 2",
  "Now subtract the original number",
  "Hmm... Let me guess... 🤔",
  "Your answer is... 5 😱💥"
];

btn.addEventListener('click',()=>{
    btn.textContent="Next ➡️";
    if(index<steps.length-1){
        nextmove.textContent=steps[index];
        Tospeak(steps[index])
        index++;
    }else if(index === steps.length-1){
        nextmove.textContent = "Thinking... 🔄";
        btn.disabled = true;
        setTimeout(()=>{
            nextmove.textContent=steps[index];
            Tospeak(steps[index]);
            btn.textContent="Play agian🔄";
            btn.disabled=false;
            index=0;
        },2500);
    }else{
        index=0;
        nextmove.tabIndex=steps[index];
        btn.textContent="Next ➡️";
    }
});
function Tospeak(text){
    const speech= new SpeechSynthesisUtterance(text);
    speech.pitch = 1.1;
    speech.rate = 0.95;
    speech.volume = 1;
    speechSynthesis.speak(speech);
}