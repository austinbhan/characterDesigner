// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headChange = 0;
let middleChange = 0;
let bottomChange = 0;

// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    console.log('changing select', headDropdown.value);
    // increment the head change count state
    headChange++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
    //assets/duck-head.png
});

middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    console.log('changing select', middleDropdown.value);
    // increment the middle change count state
    middleChange++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    console.log('changing select', bottomDropdown.value);
    // increment the bottom change count state
    bottomChange++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let catchphraseValue = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphraseValue);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You selected head ${headChange} times, torso ${middleChange} times, and bottom ${bottomChange} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = ' ';
    // loop through each catchphrase in state
    // and for each catchphrase
    for (let phrase of catchphrases) {
    // create an HTML element with the catchphrase as its text content
        const catchPhraseHistory = document.createElement('div');
        catchPhraseHistory.textContent = phrase;
    // and append that HTML element to the cleared-out DOM
        catchphrasesEl.append(catchPhraseHistory);
    }
}
