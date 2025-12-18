const speakBtn = document.getElementById("speak-btn");
const stopBtn = document.getElementById("stop-btn");
const speedSlider = document.getElementById("speed-slider");
const pitchSlider = document.getElementById("pitch-slider");
const statusElement = document.getElementById("status");
const statusText = document.getElementById("status-text");
const voiceSelect = document.getElementById("voice-select");
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

let isManuallyStopped = false;

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

  speakBtn.addEventListener("click", speak);
  stopBtn.addEventListener("click", stop);

  speedSlider.addEventListener("input", () => {
    document.getElementById("speed-value").textContent = speedSlider.value;
  });

  pitchSlider.addEventListener("input", () => {
    document.getElementById("pitch-value").textContent = pitchSlider.value;
  });

  updateCharCount();
  stopBtn.disabled = true;
}

document.addEventListener("DOMContentLoaded", init);

// Text input and character count

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

  // RESET UI FOR NEW SPEECH
  statusElement.classList.add("speaking");
  statusText.textContent = "Speaking...";
  speakBtn.disabled = true;
  stopBtn.disabled = false;

  const utterance = new SpeechSynthesisUtterance(text);

  const selectedVoiceIndex = voiceSelect.value;
  if (selectedVoiceIndex !== "") {
    utterance.voice = voices[selectedVoiceIndex];
  }
  utterance.rate = parseFloat(speedSlider.value);
  utterance.pitch = parseFloat(pitchSlider.value);
  utterance.volume = 1.0;

  utterance.onstart = () => {
    // statusElement.classList.add("speaking");
    // statusText.textContent = "Speaking...";
    // speakBtn.disabled = true;
    // stopBtn.disabled = false;
    isManuallyStopped = false;
    statusElement.classList.add("speaking");
    statusText.textContent = "Speaking...";
  };
  utterance.onend = () => {
    isStopped = false;
    statusText.textContent = "Ready";
  };
  //   utterance.onend = () => {
  //     statusElement.classList.remove("speaking");
  //     statusText.textContent = "Ready";
  //     speakBtn.disabled = false;
  //     stopBtn.disabled = true;
  //   };

  utterance.onerror = (event) => {
    if (isManuallyStopped) {
      // Ignore error caused by cancel()
      isManuallyStopped = false;
      return;
    }

    statusText.textContent = "Error occurred";
    speakBtn.disabled = false;
    stopBtn.disabled = true;
  };
  //   utterance.onerror = (event) => {
  //     console.error("Speech synthesis error:", event);
  //     statusText.textContent = "Error occurred";
  //     speakBtn.disabled = false;
  //     stopBtn.disabled = true;
  //   };
  if (synth.speaking) {
    synth.cancel();
  }

  synth.speak(utterance);
}

function stop() {
  isManuallyStopped = true;
  speechSynthesis.cancel();

  statusElement.classList.remove("speaking");
  statusText.textContent = "Stopped";
  speakBtn.disabled = false;
  stopBtn.disabled = true;
}

// function stop() {
//   synth.cancel();
//   statusElement.classList.remove("speaking");
//   statusText.textContent = "Stopped";
//   speakBtn.disabled = false;
//   stopBtn.disabled = true;
// }
