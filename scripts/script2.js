const headerEl = document.querySelector('.header');

// Function to handle scroll and apply styles
function handleScroll() {
    const portfolioArrowSection = document.getElementById('portfolioArrowSection');
    const header = document.getElementById('topHead');
    const logo = document.getElementById('logo');
    const linkItems = document.querySelectorAll('.links a');
    const contactButton = document.getElementById('contactButton');

    if (window.scrollY > 100) {
        portfolioArrowSection.style.opacity = '0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        logo.style.opacity = '1';
        contactButton.style.backgroundColor = 'rgba(49,57,60,1)';

        linkItems.forEach(link => {
            link.style.color = 'rgba(49,57,60,1)';
        });

    } else {
        portfolioArrowSection.style.opacity = '1';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        logo.style.opacity = '0';
        contactButton.style.backgroundColor = 'rgba(255,193,0,1)';

        linkItems.forEach(link => {
            link.style.color = 'rgba(255,193,0,1)';
        });
    }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);

// Call the function initially to set the correct styles on page load
handleScroll();
