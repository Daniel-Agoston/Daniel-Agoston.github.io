document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Prepare the form data to be sent
    const formData = new FormData(event.target);

    // Send the form data using AJAX
    fetch(event.target.action, {
            method: "POST",
            body: formData,
        })
        .then((response) => {
            if (response.ok) {
                document.getElementById("messageContainer").innerHTML = "Thank you! Your message has been sent.";
                document.getElementById("contactForm").reset(); // Clear the form

                // Remove the message after 2 seconds
                setTimeout(() => {
                    document.getElementById("messageContainer").innerHTML = "";
                }, 3000);
            } else {
                document.getElementById("messageContainer").innerHTML = "Oops! Something went wrong. Please try again.";
            }
        })
        .catch((error) => {
            document.getElementById("messageContainer").innerHTML = "Oops! Something went wrong. Please try again.";
        });
});
