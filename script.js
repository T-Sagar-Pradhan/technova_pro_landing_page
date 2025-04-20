// Activate Lucide icons
lucide.createIcons();

// Contact form submit handler
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll be in touch soon.");
});
