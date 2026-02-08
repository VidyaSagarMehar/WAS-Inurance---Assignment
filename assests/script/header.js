const travelBtn = document.getElementById('travelBtn');
const travelMenu = document.getElementById('travelMenu');
const travelArrow = document.getElementById('travelArrow');
const overlay = document.getElementById('pageOverlay');

// Hamburger Menu
const openMobileMenu = document.getElementById('openMobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

const mobileTravelBtn = document.getElementById('mobileTravelBtn');
const mobileTravelMenu = document.getElementById('mobileTravelMenu');
const mobileTravelArrow = document.getElementById('mobileTravelArrow');

function openDropdown() {
	travelMenu.classList.remove('hidden');
	overlay.classList.remove('hidden');
	travelArrow.classList.add('rotate-180');
	document.getElementById('main-header').classList.add('open');
}

function closeDropdown() {
	travelMenu.classList.add('hidden');
	overlay.classList.add('hidden');
	travelArrow.classList.remove('rotate-180');
	document.getElementById('main-header').classList.remove('open');
}

travelBtn?.addEventListener('click', (e) => {
	e.stopPropagation();
	const isOpen = !travelMenu.classList.contains('hidden');
	isOpen ? closeDropdown() : openDropdown();
});

overlay?.addEventListener('click', closeDropdown);

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') closeDropdown();
});

openMobileMenu?.addEventListener('click', () => {
	mobileMenu.classList.remove('hidden');
});

closeMobileMenu?.addEventListener('click', () => {
	mobileMenu.classList.add('hidden');
});

mobileTravelBtn?.addEventListener('click', () => {
	mobileTravelMenu.classList.toggle('hidden');
	mobileTravelArrow.classList.toggle('rotate-180');
});
