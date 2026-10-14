// Select the contact form
const contactForm = document.getElementById("contactForm");

// Your email address
const myEmail = "ashodiyadevansh@gmail.com";

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Check that all fields are filled
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare the email subject and body
    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        `Hello Devansh,

You have received a new message from your portfolio.

Name: ${name}
Sender's Email: ${email}

Message:
${message}

Regards,
${name}`
    );

    // Open Gmail compose with the details filled in
    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(myEmail)}` +
        `&su=${emailSubject}` +
        `&body=${emailBody}`;

    // Open Gmail in a new tab
    window.open(gmailURL, "_blank");
});