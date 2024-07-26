document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const projectList = document.getElementById('projectList');
    const projectItems = Array.from(projectList.getElementsByClassName('project-item'));

    searchInput.addEventListener('input', filterProjects);
    sortSelect.addEventListener('change', sortProjects);

    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        projectItems.forEach(item => {
            const keywords = item.getAttribute('data-keywords').toLowerCase();
            if (keywords.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function sortProjects() {
        const sortOrder = sortSelect.value;
        const sortedItems = projectItems.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
        projectList.innerHTML = '';
        sortedItems.forEach(item => {
            projectList.appendChild(item);
        });
    }

    // Initial sort on page load
    sortProjects();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open modal with project details
function openModal(title, description, date, keywords) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-date").innerText = "Date: " + date;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-keywords").innerText = "Keywords: " + keywords;
    modal.style.display = "block";
}