function findAndBook() {
    const location = document.getElementById('location').value;
    const service = document.getElementById('service').value;

    if (service === "") {
        alert("Please select a service.");
        return;
    }

    // Redirect user based on their selection (dummy URL for demonstration)
    const searchURL = `https://yourwebsite.com/search?location=${location}&service=${service}`;
    window.location.href = searchURL;
}
