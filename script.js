//your JS code here. If required.
const statusElement = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');
function handleEnter() {
    // Create a new <h1> element with the new text
    const newElement = document.createElement('h1');
    newElement.textContent = 'Entered Metaverse';


	const parentElement = statusElement.parentElement;
    parentElement.replaceChild(newElement, statusElement);
}

// Attach event listener to the button
enterBtn.addEventListener('click', handleEnter);