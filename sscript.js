document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealBtn');
    const surpriseContent = document.getElementById('surpriseContent');

    revealBtn.addEventListener('click', () => {
        surpriseContent.classList.remove('hidden');
        revealBtn.style.display = 'none'; // Hide the button after it's clicked
    });
});