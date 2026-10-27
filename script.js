document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });

   
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Fetch values (You can connect this to a backend API later)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
           
            alert(`Thanks for reaching out, ${name}! Your message has been simulated successfully. I will get back to you at ${email}.`);
            
           
            contactForm.reset();
        });
    }
});