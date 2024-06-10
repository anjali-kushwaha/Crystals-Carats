const list = document.getElementById('list');
const faqItems = document.querySelectorAll('.faq-item');

list.addEventListener('click', () => {
    faqItems.forEach(item => {
        if (item.style.display === "none" || item.style.display === "") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


