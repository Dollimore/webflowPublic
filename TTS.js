<script>
let currentlyPlaying = null; // keeps track of the current audio element

let ttsAudioMap = {
    playbutton1: "YOUR AUIDO URL HERE",
    playbutton2: "YOUR AUIDO URL HERE"
};

// set up audio players dynamically
function setupAudioPlayers() {
    // iterate through each button ID
    for (const buttonId in ttsAudioMap) {
        const button = document.getElementById(buttonId);
        if (button) {
            // get audio source URL from the map
            const audioSrc = ttsAudioMap[buttonId];
            const audio = new Audio(audioSrc);
            
            button.addEventListener('click', () => {
                toggleAudio(audio, button);
            });
        }
    }
}

function toggleAudio(audio, button) {
    // check if the clicked button corresponds to the currently playing audio
    const isCurrentlyPlaying = currentlyPlaying === audio;
    
    // stop the currently playing audio if it exists and is not the clicked one
    if (currentlyPlaying && !isCurrentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        if (currentlyPlaying.previousSibling) {
            currentlyPlaying.previousSibling.textContent = 'Press to listen!'; // reset previous button text if available
        }
    }
    
    // play or pause the audio based on its current state
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
        currentlyPlaying = audio;
    } else {
        if (!isCurrentlyPlaying) {
            audio.pause();
            audio.currentTime = 0;
            button.textContent = 'Press to listen!';
            currentlyPlaying = null;
        } else {
            audio.pause();
            button.textContent = 'Press to listen!';
            currentlyPlaying = null;
        }
    }
    
    // reset button text after audio finishes
    audio.onended = function() {
        button.textContent = 'Press to listen!';
        currentlyPlaying = null;
    };
}

document.addEventListener('DOMContentLoaded', setupAudioPlayers);

</script>
