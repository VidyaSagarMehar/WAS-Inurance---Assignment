const travelBtn = document.getElementById('travelBtn');
const travelMenu = document.getElementById('travelMenu');
const travelArrow = document.getElementById('travelArrow');
const overlay = document.getElementById('pageOverlay');

function openDropdown() {
	travelMenu.classList.remove('hidden');
	overlay.classList.remove('hidden');
	travelArrow.classList.add('rotate-180');
}

function closeDropdown() {
	travelMenu.classList.add('hidden');
	overlay.classList.add('hidden');
	travelArrow.classList.remove('rotate-180');
}

travelBtn.addEventListener('click', (e) => {
	e.stopPropagation();
	const isOpen = !travelMenu.classList.contains('hidden');
	isOpen ? closeDropdown() : openDropdown();
});

// Close when clicking overlay
overlay.addEventListener('click', closeDropdown);

// Optional: close on ESC
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') closeDropdown();
});
