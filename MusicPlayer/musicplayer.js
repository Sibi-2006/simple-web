const audio = document.getElementById('audio');
const songName = document.getElementById('songName');
const PuseOrPlay = document.getElementById('PuseOrPlay');
const img = document.getElementById('img');

const songs = [
  { name: "Eminem - Without Me", file: "Eminem - Without Me.mp3", img: "eminem.jpg" },
  { name: "Yung Kai - Blue", file: "yung kai - blue.mp3", img: "blue.jpg" },
  { name: "MY TYPE", file: "MY TYPE.mp3", img: "mytype.jpg" },
  { name: "Sonne", file: "Sonne.mp3", img: "sonne.jpg" },
  { name: "Mary On A Cross", file: "Ghost - Mary On A Cross.mp3", img: "mary.jpg" }
];

let songindex = 0;

function loadSong(index) {
  audio.src = `songs/${songs[index].file}`;
  img.src = `img/${songs[index].img}`;
  songName.textContent = `Song: ${songs[index].name}`;
  img.classList.remove("playing"); 
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    PuseOrPlay.textContent = "⏸️";
    img.classList.add("playing");
  } else {
    audio.pause();
    PuseOrPlay.textContent = "▶️";
    img.classList.remove("playing");
  }
}

function nextSong() {
  songindex = (songindex + 1) % songs.length;
  loadSong(songindex);
  audio.play();
  PuseOrPlay.textContent = "⏸️";
  img.classList.add("playing");
}

function prevSong() {
  songindex = (songindex - 1 + songs.length) % songs.length;
  loadSong(songindex);
  audio.play();
  PuseOrPlay.textContent = "⏸️";
  img.classList.add("playing");
}

audio.addEventListener("ended", nextSong);

loadSong(songindex); 
