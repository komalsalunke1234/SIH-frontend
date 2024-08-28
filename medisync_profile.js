document.addEventListener("DOMContentLoaded", function() {
    const submit = document.querySelector('.submit');
    const submitBtn = document.querySelector('.submit-btn');
    const editBtn = document.getElementById('edit-btn');
    const downloadBtn = document.getElementById('download-btn');
    const printBtn = document.getElementById('print-btn');

    submit.addEventListener('click', function() {
        alert('history is here...');
        submit.style.display='inline-block';
    });


    submitBtn.addEventListener('click', function() {
        alert('Form submitted successfully!');
        editBtn.style.display = 'inline-block';
        downloadBtn.style.display = 'inline-block';
        printBtn.style.display = 'inline-block';
    });

    editBtn.addEventListener('click', function() {
        alert('Editing form...');
        // Implement form editing logic here
    });

    downloadBtn.addEventListener('click', function() {
        alert('Downloading form...');
        // Implement form downloading logic here
        // Download summary as a text file
   

    });

    printBtn.addEventListener('click', function() {
        alert('Printing form...');
        // Implement form printing logic here
    });
});

function showSince(elementId) {
    document.getElementById(elementId).style.display = 'inline-block';
}

function hideSince(elementId) {
    document.getElementById(elementId).style.display = 'none';
}
