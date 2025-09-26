window.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const headerContent = tempDiv.querySelector('header').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('header').innerHTML = headerContent;
        });
});

window.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const footerContent = tempDiv.querySelector('footer').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('footer').innerHTML = footerContent;
        });
});


window.addEventListener('DOMContentLoaded', () => {
    fetch('why-choose-section.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the entire section content from the temporary div
            const whychooseContent = tempDiv.querySelector('.why-section').innerHTML; // Assuming the section is inside the 'why-section' class
            // Insert the content into the #why_choose_section element
            document.getElementById('why_choose_section').innerHTML = whychooseContent;
        });
});



// scroll animation start

// Intersection Observer Options
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Callback function to handle the intersection
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to trigger animation
            entry.target.classList.add('visible');
            // Optionally, unobserve after it's animated
            observer.unobserve(entry.target);
        }
    });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, options);

// Target all sections/elements you want to animate
const sections = document.querySelectorAll('.section-animate');

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
// scroll animation end