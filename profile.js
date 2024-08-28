// JavaScript for handling form submission and displaying profile summary

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const diseases = document.getElementById('diseases').value;
    const medications = document.getElementById('medications').value;
    const tests = document.getElementById('tests').value;
    const allergies = document.getElementById('allergies').value;
    const medicalHistory = document.getElementById('medicalHistory').value;
    const emergencyContact = document.getElementById('emergencyContact').value;

    // Display summary
    const summaryContainer = document.getElementById('summary-container');
    const profileSummary = document.getElementById('profile-summary');
    
    profileSummary.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Blood Group:</strong> ${bloodGroup}</p>
        <p><strong>Diseases:</strong> ${diseases}</p>
        <p><strong>Medications:</strong> ${medications}</p>
        <p><strong>Medical Tests Conducted:</strong> ${tests}</p>
        <p><strong>Allergies:</strong> ${allergies}</p>
        <p><strong>Medical History:</strong> ${medicalHistory}</p>
        <p><strong>Emergency Contact:</strong> ${emergencyContact}</p>
    `;

    // Show summary and hide form
    document.getElementById('profile-form').style.display = 'none';
    summaryContainer.style.display = 'block';
});

// Edit button functionality
document.getElementById('edit-btn').addEventListener('click', function() {
    document.getElementById('profile-form').style.display = 'block';
    document.getElementById('summary-container').style.display = 'none';
});

// Download summary as a text file
document.getElementById('download-btn').addEventListener('click', function() {
    const profileSummary = document.getElementById('profile-summary').innerText;
    const blob = new Blob([profileSummary], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ProfileSummary.txt';
    link.click();
});

// Print summary
document.getElementById('print-btn').addEventListener('click', function() {
    window.print();
});
