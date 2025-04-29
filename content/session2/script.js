document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status'); // Optional status text
  const playButton = document.getElementById('animalSoundBtn');

  const audioMap = {
    dogMarker: {
      soundEl: document.getElementById('dogSound'),
      label: ''
    },
    catMarker: {
      soundEl: document.getElementById('catSound'),
      label: ''
    },
    lionMarker: {
      soundEl: document.getElementById('lionSound'),
      label: ''
    },
    monkeyMarker: {
      soundEl: document.getElementById('monkeySound'),
      label: ''
    }
  };

  let currentAnimal = null;

  // Unlock audio on first interaction
  // Attach markerFound/markerLost to all markers
  Object.keys(audioMap).forEach(markerId => {
    const markerEl = document.getElementById(markerId);
    markerEl.addEventListener('markerFound', () => {
      currentAnimal = markerId;
      playButton.style.display = 'block';
      console.log(`${markerId} found`);
    });

    markerEl.addEventListener('markerLost', () => {
      if (currentAnimal === markerId) {
        currentAnimal = null;
        playButton.style.display = 'none';
        console.log(`${markerId} lost`);
      }
    });
  });

  // Play sound when button clicked
  playButton.addEventListener('click', () => {
    if (currentAnimal && audioMap[currentAnimal]) {
      const audio = audioMap[currentAnimal].soundEl;
      const label = audioMap[currentAnimal].label;
      audio.currentTime = 0;
      audio.play().then(() => {
        if (statusEl) {
          statusEl.textContent = label;
          setTimeout(() => {
            statusEl.textContent = '';
          }, 2000);
        }
      }).catch(err => {
        console.error("Audio play failed:", err);
      });
    }
  });
});
