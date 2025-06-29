const btn = document.getElementById('btn');
let res = document.getElementById('res');
let input = document.getElementById('input');
let attempts = document.getElementById('attempts');
let maxAtt = document.getElementById('maxAtt');

let num = Math.floor(Math.random() * 100) + 1;
let count = 0;
let max = 10;
let score = { win: 0, loss: 0 };

function resetGame() {
    num = Math.floor(Math.random() * 100) + 1;
    count = 0;
    res.textContent = "🔄 New number generated! Try again!";
    input.value = "";
}
function updatemax(){
    max=10;
}
btn.addEventListener('click', () => {
    const guess = parseInt(input.value);

    if (isNaN(guess)) {
        res.textContent = "Please enter a number! ❌";
        return;
    }

    if (guess < 1 || guess > 100) {
        res.textContent = "Number must be between 1 and 100 ⚠️";
        return;
    }

    count++;

    if (guess < num) {
        res.textContent = "Too Small 📉";
    } else if (guess > num) {
        res.textContent = "Too Big 📈";
    } else {
        res.textContent = `🎉 Correct! The number was ${num} 🥳`;
        score.win++;
        max--;
        resetGame();
    }

    attempts.textContent = `Attempts: ${count}/${max} | Wins: ${score.win} | Losses: ${score.loss}`;
    maxAtt.textContent = `Max Attempts: ${max}`;
    if (count >= max) {
        res.textContent = `❌ Out of attempts! The number was ${num}`;
        score.loss++;
        max++;
        resetGame();
        attempts.textContent = `Attempts: 0/${max} | Wins: ${score.win} | Losses: ${score.loss}`;
    }
    if(max<0 || max>10){
        updatemax();
    }
});
