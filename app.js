// Web Speech API
const synth = window.speechSynthesis;
let voices = [];

// Load voices
function loadVoices() {
  voices = synth.getVoices();

  if (voices.length === 0) {
    return;
  }

  // Clear existing voice options
  const voiceSelect = document.getElementById("voice-select");
  voiceSelect.innerHTML = "";
}
