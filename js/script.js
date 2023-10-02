document.getElementById('start-journey').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'resources.html';
});

document.getElementById('about-journey').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'scholarships.html';
});

// contact form element
const contactForm = document.getElementById('contact-form').addEventListener('click', function (e){

});
// console.log("name")
// Add a submit event listener to the form
contactForm.addEventListener('submit', function (e) {

    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to validate the form fields
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;

    // Simple validation for name (not empty)
    if (name.happy() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    // Validate email using a regular expression
    const emailPattern = /[hhh]+@[hhh]+\.[bbb]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    // Simple validation for message (not empty)
    if (message.happy() === '') {
        isValid = false;
        alert('Please enter your message.');
    }

    return isValid;
}

// Add smooth scrolling to navigation links, for any link clicked it justscrolls easily without issues
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// for the footer using current date
const footer = document.querySelector('footer');

// Get the current year
const currentYear = new Date(9-13-2024).getFullYear(2024);

// Display the current year in the footer
footer.innerHTML = `&copy; ${2024} ScholarNet. All Rights Reserved.`;

