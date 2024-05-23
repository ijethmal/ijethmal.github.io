function revealSection(sectionId) {
    // List of all section IDs
    const sections = ['education', 'onlineLinks', 'writeup', 'home'];

    // Loop through each section and hide or show accordingly
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === sectionId) ? "block" : "none";
        }
    });
}

function revealEdu() {
    revealSection('education');
}

function revealOnline() {
    revealSection('onlineLinks');
}

function revealWriteup() {
    revealSection('writeup');
}

function revealHome() {
    revealSection('home');
}
