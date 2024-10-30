// Toggle Dark Mode
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Open Modal for Project Details
function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechStack = document.getElementById('modal-tech-stack');

    const projectData = {
        'vitality-vault': {
            title: 'Vitality Vault',
            description: 'A mock fitness app designed for users to track their daily calorie and macronutrient intake, also generates personalised workouts for the user.',
            techStack: 'Java, SQL, MySQL, Apache Netbeans'
        },
        'munch-mob': {
            title: 'Munch Mob',
            description: 'A mock food delivery service website for multiple restaraunts incorporating a basket system.',
            techStack: 'HTML, CSS, JavaScript, VS Code'
        },
        'Urban & Co Barbers': {
            title: 'Urban & Co Barbers',
            description: 'A website I was compensated for building and running, built to just display the services and items available in store.',
            techStack: 'HTML, CSS, JavaScript, VS Code'
        }
    };

    modalTitle.textContent = projectData[project].title;
    modalDescription.textContent = projectData[project].description;
    modalTechStack.textContent = projectData[project].techStack;

    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add a Scroll-to-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑';
scrollTopButton.id = 'scroll-to-top';
scrollTopButton.style.position = 'fixed';
scrollTopButton.style.bottom = '20px';
scrollTopButton.style.right = '20px';
scrollTopButton.style.display = 'none';
scrollTopButton.style.padding = '10px';
scrollTopButton.style.border = 'none';
scrollTopButton.style.borderRadius = '5px';
scrollTopButton.style.backgroundColor = '#007BFF';
scrollTopButton.style.color = 'white';
scrollTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollTopButton);

// Show/Hide Scroll-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll to Top on Button Click
scrollTopButton.addEventListener('click', scrollToTop);
