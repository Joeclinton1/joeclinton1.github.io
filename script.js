// Abstract toggle functionality
function toggleAbstract() {
    const abstract = document.getElementById('abstract');
    const button = document.querySelector('.abstract-toggle');

    if (abstract.classList.contains('show')) {
        abstract.classList.remove('show');
        button.textContent = 'Show abstract';
    } else {
        abstract.classList.add('show');
        button.textContent = 'Hide abstract';
    }
}
