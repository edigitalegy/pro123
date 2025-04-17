document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status'); // Optional status text
  const playButton = document.getElementById('animalSoundBtn');

  const audioMap = {
    ele1Marker: {
      soundEl: document.getElementById('ele1Sound'),
      label: ''
    },
    ele2Marker: {
      soundEl: document.getElementById('ele2Sound'),
      label: ''
    },
    ele3Marker: {
      soundEl: document.getElementById('ele3Sound'),
      label: ''
    },
    ele4Marker: {
      soundEl: document.getElementById('ele4Sound'),
      label: ''
    },
    ele5Marker: {
      soundEl: document.getElementById('ele5Sound'),
      label: ''
    },
    ele6Marker: {
      soundEl: document.getElementById('ele6Sound'),
      label: ''
    },
    ele7Marker: {
      soundEl: document.getElementById('ele7Sound'),
      label: ''
    },
    ele8Marker: {
      soundEl: document.getElementById('ele8Sound'),
      label: ''
    }
  };

  let currentAnimal = null;

  // Attach markerFound/markerLost to all markers
  Object.keys(audioMap).forEach(markerId => {
    const markerEl = document.getElementById(markerId);
    if (!markerEl) {
      console.warn(`Marker element not found: ${markerId}`);
      return;
    }

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
