const speakBtn = document.getElementById("speak-btn");
const stopBtn = document.getElementById("stop-btn");
const speedSlider = document.getElementById("speed-slider");
const pitchSlider = document.getElementById("pitch-slider");
const status = document.getElementById("status");
const statusText = document.getElementById("status-text");

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

  textInput.addEventListener("input", updateCharCount);
  updateCharCount();
}

document.addEventListener("DOMContentLoaded", init);

// Text input and character count
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

function updateCharCount() {
  const count = textInput.value.length;
  charCount.textContent = count;
}

textInput.addEventListener("input", updateCharCount);

function speak() {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please enter some text to speak");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
}
