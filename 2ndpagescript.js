function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove('open');
        icon.textContent = '+';
    } else {
        content.style.display = "block";
        icon.classList.add('open');
        icon.textContent = '-';
    }
}
