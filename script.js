var toggleButton = document.getElementById('toggleButton');
var textToToggle = document.getElementById('skills');
function toggleTextVisibility() {
    if (textToToggle.style.display === 'none') {
        textToToggle.style.display = 'block'; // Show the text
    }
    else {
        textToToggle.style.display = 'none'; // Hide the text
    }
}
toggleButton.addEventListener('click', toggleTextVisibility);
