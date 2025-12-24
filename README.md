# Web Speech API - Text To Speech App

A simple, client-side web application that converts text into spoken audio using the browser's native **Web Speech API**. This project demonstrates the core capabilities of the `SpeechSynthesis` interface, allowing users to customize the voice, speed, and pitch of the generated speech.

## Features

- **Text-to-Speech Conversion:** Converts any entered text into spoken audio.

- **Dynamic Voice Selection:** Automatically loads and provides a dropdown list of all available voices on the user's system/browser.

- **Speed Control:** Adjust the speaking rate from 0.5x (slow) to 2.0x (fast).

- **Pitch Control:** Fine-tune the pitch of the voice.

- **Real-time Status:** Provides visual feedback on the application's state (Ready, Speaking, Stopped).

- **Character Counter:** Tracks the length of the input text.

- **Stop Functionality:** Allows the user to immediately cancel the ongoing speech.

## Technology Stack

This is a purely client-side application built with:

| Technology | Description |
| --- | --- |
| **HTML5** | Provides the structure and user interface elements. |
| **CSS3** | Handles the styling and layout of the application. |
| **JavaScript** | Implements the core logic using the native **Web Speech API** (`SpeechSynthesis` and `SpeechSynthesisUtterance`). |

## Getting Started

Since this is a static web application, no build tools or server-side dependencies are required.

### Prerequisites

You only need a modern web browser that supports the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Yiranubari/TTS.git
   cd TTS
   ```

1. **Open the file:** Simply open the `index.html` file in your web browser.

   ```bash
   # Example command (may vary by OS )
   open index.html
   ```

## Usage

1. **Enter Text:** Type or paste the text you want to convert into the text area.

1. **Select Voice:** Choose a voice from the "Voice" dropdown menu. The available voices depend on your operating system and browser.

1. **Adjust Controls (Optional):** Use the sliders to set your desired **Speed** and **Pitch**.

1. **Speak:** Click the **"🔊 Speak"** button to start the text-to-speech conversion.

1. **Stop:** Click the **"⏹️ Stop"** button to immediately halt the speech.

## Project Structure

```
TTS/
├── index.html      # Main application structure and UI
├── app.js          # Core JavaScript logic (Web Speech API implementation)
└── style.css       # Styling for the application
```

## Author

- **Yiranubari Maamaa**

