// Web Speech API
const synth = window.speechSynthesis;
let voices = [];

// Load voices
function loadVoices() {
  voices = synth.getVoices();

  if (voices.length === 0) {
    return;
  }
}
