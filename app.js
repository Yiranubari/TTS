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

  // Populate voice options
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  console.log(`Loaded ${voices.length} voices`);
}
// Initialize
function init() {
  loadVoices();
  synth.addEventListener("voiceschanged", loadVoices);
}

document.addEventListener("DOMContentLoaded", init);
