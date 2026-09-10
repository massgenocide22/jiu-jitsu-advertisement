const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
	menuToggle.addEventListener("click", () => {
		const isOpen = siteNav.classList.toggle("open");
		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.textContent = isOpen ? "Close" : "Menu";
	});
}

document.querySelectorAll("[data-year]").forEach((element) => {
	element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const status = contactForm.querySelector(".form-status");
		status.textContent = "Thank you. We will be in touch shortly.";
		contactForm.reset();
	});
}
