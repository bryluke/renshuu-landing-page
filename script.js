// A simple script to set the copyright year dynamically

document.addEventListener('DOMContentLoaded', () => {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} renshuu. All rights reserved.`;
    }
    console.log("renshuu. placeholder page loaded successfully.");
});