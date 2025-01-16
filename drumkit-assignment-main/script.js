const drumSounds = {
  Q: "kick.wav",
  W: "snare.wav",
  E: "hihat.wav",
  R: "openhat.wav",
  T: "ride.wav",
  Y: "clap.wav",
  U: "tink.wav",
  I: "tom.wav",
};

function playSound(soundFile) {
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
}

document.querySelectorAll(".drum-image").forEach((image) => {
  image.addEventListener("click", (event) => {
    const soundId = event.target.parentElement.id;
    const key = getKeyBySoundId(soundId);
    playSound(drumSounds[key]);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (drumSounds[key]) {
    playSound(drumSounds[key]);
  }
});

function getKeyBySoundId(id) {
  const soundKeys = {
    kick: "Q",
    snare: "W",
    hihat: "E",
    openhat: "R",
    ride: "T",
    clap: "Y",
    tink: "U",
    tom: "I",
  };
  return soundKeys[id];
}
