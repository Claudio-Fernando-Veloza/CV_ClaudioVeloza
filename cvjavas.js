// Example JavaScript to add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.addEventListener('click', function() {
            alert(`You clicked on section ${index + 1}`);
        });
    });
});