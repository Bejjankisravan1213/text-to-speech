let synth = window.speechSynthesis;
let utterance;

// Play speech
document.getElementById("playBtn").addEventListener("click", () => {
    let text = document.getElementById("textInput").value;
    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    // If already speaking, stop and restart
    if (synth.speaking) {
        synth.cancel();
    }

    utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
});

// Pause speech
document.getElementById("pauseBtn").addEventListener("click", () => {
    if (synth.speaking && !synth.paused) {
        synth.pause();
    }
});

// Resume speech
document.getElementById("resumeBtn").addEventListener("click", () => {
    if (synth.paused) {
        synth.resume();
    }
});

// Stop speech
document.getElementById("stopBtn").addEventListener("click", () => {
    if (synth.speaking || synth.paused) {
        synth.cancel();
    }
});
