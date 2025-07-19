document.addEventListener('DOMContentLoaded', function () {

	// --- Function to set the active navigation link ---
	const setActiveNavLink = () => {
		const navLinks = document.querySelectorAll('.nav-link');
		const currentPage = window.location.pathname.split('/').pop() || 'index.html';

		navLinks.forEach(link => {
			const linkPage = link.getAttribute('href').split('/').pop();
			if (linkPage === currentPage) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
	};

	// --- Function to set the current year in the footer ---
	const setCurrentYear = () => {
		const yearSpan = document.getElementById('current-year');
		if (yearSpan) {
			yearSpan.textContent = new Date().getFullYear();
		}
	};

	// --- Scroll Animation Logic ---
	const observeElements = (selector) => {
		const elements = document.querySelectorAll(selector);
		if (elements.length > 0) {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			}, { threshold: 0.1 });

			elements.forEach(item => {
				observer.observe(item);
			});
		}
	};

	// --- Run all scripts ---
	setActiveNavLink();
	setCurrentYear();
	observeElements('.timeline-item');
	observeElements('.project-card-large, .project-card-kor');
	observeElements('.info-card');
});