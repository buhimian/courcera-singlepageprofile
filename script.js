// Back to top button logic
document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
function showMessage() {
    document.getElementById('message').textContent = 'Hello from John Doe!';
}

// Recommendation form popup logic
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('recommendationForm');
    var modal = document.getElementById('recommendationModal');
    var closeBtn = document.getElementById('closeModalBtn');
    var recommendationsRow = document.querySelector('.recommendations-row');
    if (form && modal && closeBtn && recommendationsRow) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form values
            var name = form.elements['name'].value.trim();
            var message = form.elements['message'].value.trim();
            if (message) {
                // Format recommendation text
                var text = message;
                if (name) {
                    text = '<strong>' + name + ':</strong> ' + message;
                }
                // Create new recommendation box
                var div = document.createElement('div');
                div.className = 'recommendation-box';
                div.innerHTML = text;
                recommendationsRow.appendChild(div);
            }
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            form.reset();
        });
    }
});
