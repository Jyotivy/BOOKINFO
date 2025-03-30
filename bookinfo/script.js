document.querySelectorAll('.star-rating span').forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.getElementById('rating').value = value;
        
        // Remove "selected" from all stars
        document.querySelectorAll('.star-rating span').forEach(s => s.classList.remove('selected'));

        // Add "selected" class to clicked star and all next stars (for correct forward selection)
        this.classList.add('selected');
        let nextSibling = this.nextElementSibling;
        while (nextSibling) {
            nextSibling.classList.add('selected');
            nextSibling = nextSibling.nextElementSibling;
        }
    });
});
