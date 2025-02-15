let noClickCount = 0;
let yesScaleFactor = 1; // Initial scale factor for "Yes" button

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const yayScreen = document.getElementById('yayScreen');
const container = document.getElementById('container');

// Width of the screen
const screenWidth = window.innerWidth;

function handleNo() {
    noClickCount++;

    // Move the No button to the left each time it is clicked
    noBtn.style.left = `${-noClickCount * 50}px`; // Moves it by 50px each click

    // If the No button moves off the screen, disable it
    if (parseInt(noBtn.style.left) <= -screenWidth) {
        noBtn.disabled = true;
        noBtn.style.backgroundColor = '#ccc'; // Disable button appearance
    }

    // Scale the Yes button more each time "No" is clicked
    yesScaleFactor += 0.1; // Increase the scale factor for each click
    yesBtn.style.transform = `scale(${yesScaleFactor})`;
}

function handleYes() {
    yayScreen.classList.remove('hidden');
    container.classList.add('hidden');
}
