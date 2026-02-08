const travelBtn = document.getElementById('travelBtn');
const travelMenu = document.getElementById('travelMenu');
const travelArrow = document.getElementById('travelArrow');
const overlay = document.getElementById('pageOverlay');
const icon = document.getElementById('dropdownIcon');

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

// Open mobile menu
openMobileMenu.addEventListener('click', () => {
	mobileMenu.classList.remove('hidden');
});

// Close mobile menu
closeMobileMenu.addEventListener('click', () => {
	mobileMenu.classList.add('hidden');
});

// Toggle travel submenu
mobileTravelBtn.addEventListener('click', () => {
	mobileTravelMenu.classList.toggle('hidden');
	mobileTravelArrow.classList.toggle('rotate-180');
});

// Travel Drop Down menu
const countries = [
	'India',
	'United States',
	'United Kingdom',
	'Canada',
	'Australia',
	'Germany',
	'France',
	'Singapore',
	'UAE',
	'Japan',
	'Thailand',
	'New Zealand',
];

const input = document.getElementById('countryInput');
const list = document.getElementById('countryList');
const wrapper = document.getElementById('countryDropdown');

let activeIndex = -1;
let currentItems = [];

function renderList(filter = '') {
	list.innerHTML = '';
	activeIndex = -1;

	currentItems = countries.filter((country) =>
		country.toLowerCase().includes(filter.toLowerCase()),
	);

	// ❌ No results found
	if (!currentItems.length && filter.trim() !== '') {
		const li = document.createElement('li');
		li.textContent = 'Destination not found';
		li.className = 'px-4 py-2 text-sm text-gray-400 cursor-not-allowed';

		list.appendChild(li);
		list.classList.remove('hidden');
		icon.classList.add('rotate-180');
		return;
	}

	// Empty input → hide dropdown
	if (!currentItems.length) {
		list.classList.add('hidden');
		icon.classList.remove('rotate-180');
		return;
	}

	// Render matches
	currentItems.forEach((country, index) => {
		const li = document.createElement('li');
		li.textContent = country;
		li.className = 'px-4 py-2 text-sm cursor-pointer hover:bg-blue-50';

		li.addEventListener('mouseenter', () => setActive(index));
		li.onclick = () => selectCountry(index);

		list.appendChild(li);
	});

	list.classList.remove('hidden');
	icon.classList.add('rotate-180');
}

function setActive(index) {
	const items = list.children;
	if (!items.length) return;

	if (activeIndex >= 0) {
		items[activeIndex].classList.remove('bg-blue-100');
	}

	activeIndex = index;
	items[activeIndex].classList.add('bg-blue-100');
}

function selectCountry(index) {
	const country = currentItems[index];
	addChip(country);

	input.value = '';
	list.classList.add('hidden');
	icon.classList.remove('rotate-180');
	activeIndex = -1;
}

input.addEventListener('keydown', (e) => {
	const items = list.children;

	if (e.key === 'ArrowDown' && items.length) {
		e.preventDefault();
		setActive((activeIndex + 1) % items.length);
	}

	if (e.key === 'ArrowUp' && items.length) {
		e.preventDefault();
		setActive((activeIndex - 1 + items.length) % items.length);
	}

	if (e.key === 'Enter') {
		e.preventDefault();

		// If dropdown item is highlighted
		if (activeIndex >= 0) {
			selectCountry(activeIndex);
			return;
		}

		// If user typed full country name
		const typedValue = input.value.trim();
		const match = countries.find(
			(c) => c.toLowerCase() === typedValue.toLowerCase(),
		);

		if (match) {
			addChip(match);
			input.value = '';
			list.classList.add('hidden');
			icon.classList.remove('rotate-180');
			activeIndex = -1;
		}
	}

	if (e.key === 'Escape') {
		list.classList.add('hidden');
		icon.classList.remove('rotate-180');
		activeIndex = -1;
	}
});

input.addEventListener('focus', () => renderList(input.value));
input.addEventListener('input', (e) => renderList(e.target.value));

document.addEventListener('click', (e) => {
	if (!wrapper.contains(e.target)) {
		list.classList.add('hidden');
		icon.classList.remove('rotate-180');
		activeIndex = -1;
	}
});

//  opens/closes dropdown
icon.addEventListener('click', () => {
	if (list.classList.contains('hidden')) {
		renderList(input.value);
		input.focus();
	} else {
		list.classList.add('hidden');
		icon.classList.remove('rotate-180');
	}
});

// Chips
const chipsContainer = document.getElementById('chipsContainer');
const selectedCountries = new Set();

function addChip(country) {
	if (selectedCountries.has(country)) return;

	selectedCountries.add(country);

	const chip = document.createElement('span');
	chip.className =
		'bg-[var(--primary-color)] text-white text-xs px-3 py-1 rounded flex items-center gap-1';

	chip.innerHTML = `
        ${country}
        <span class="cursor-pointer text-white ml-1">×</span>
    `;

	chip.querySelector('span').onclick = () => {
		selectedCountries.delete(country);
		chip.remove();
	};

	chipsContainer.appendChild(chip);
}
