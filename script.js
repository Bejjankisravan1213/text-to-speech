document.addEventListener("DOMContentLoaded", () => {
    const speakBtn = document.getElementById("speakBtn");
    const textInput = document.getElementById("textInput");

    speakBtn.addEventListener("click", () => {
        const text = textInput.value.trim();

        if (!text) {
            alert("Please enter some text!");
            return;
        }

        // Stop any previous speech before starting
        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US"; // Change: "hi-IN", "te-IN", etc. for Indian languages
        speech.pitch = 1; // 0 (low) - 2 (high)
        speech.rate = 1; // 0.1 (slow) - 10 (fast)
        speech.volume = 1; // 0 (mute) - 1 (full)

        window.speechSynthesis.speak(speech);
    });
});