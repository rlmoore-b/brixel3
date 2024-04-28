// Example JavaScript to display current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p');
    yearSpan.textContent += ` ${new Date().getFullYear()}.`;
});
