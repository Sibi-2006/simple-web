let gameBoard = document.getElementById('gameBoard');
let message = document.getElementById('message');

const emojis = [
  "🐼", "🐼", "🐶", "🐶", "🌸", "🌸", "🪺", "🪺", "🧚🏻‍♀️", "🧚🏻‍♀️",
  "🏕️", "🏕️", "🤍", "🤍", "🪄", "🪄", "🌚", "🌚", "🍬", "🍬",
  "🤡", "🤡", "😁", "😁"
];

let flippedCards = [];
let matchedCards = 0;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startgame() {
  let shuffled = shuffle(emojis);
  shuffled.forEach(emoji => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.innerText = "";
    card.addEventListener("click", handleFlip);
    gameBoard.appendChild(card);
  });
}

function handleFlip() {
  if (
    flippedCards.length === 2 ||
    this.classList.contains("matched") ||
    this.classList.contains("flipped")
  ) return;

  this.classList.add("flipped");
  this.innerText = this.dataset.emoji;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    setTimeout(WinLoss, 750);
  }
}

function WinLoss() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards += 2;
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    card1.innerText = "";
    card2.innerText = "";
  }

  flippedCards = [];

  if (matchedCards === emojis.length) {
    message.innerText = "🎉 You Won! Refresh to play again!";
  }
}

startgame();
