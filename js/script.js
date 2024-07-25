document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
    });
});
