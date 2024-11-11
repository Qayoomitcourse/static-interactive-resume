
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const textToToggle = document.getElementById('skills') as HTMLDivElement;


function toggleTextVisibility() {
  if (textToToggle.style.display === 'none') {
    textToToggle.style.display = 'block';  // Show the text
  } else {
    textToToggle.style.display = 'none';   // Hide the text
  }
}

toggleButton.addEventListener('click', toggleTextVisibility);
