// Minimal JS for back-to-top button
var backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
