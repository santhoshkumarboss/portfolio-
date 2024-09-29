document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject =document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const contactData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Save the object in localStorage as a string
    localStorage.setItem('contactData', JSON.stringify(contactData));

    // Optionally, alert the user that their data has been saved
    alert('Contact data has been saved!');
});
