document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('countryInput');
	if (!input) return; // ✅ SAFE early exit

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

	const list = document.getElementById('countryList');
	const wrapper = document.getElementById('countryDropdown');
	const icon = document.getElementById('dropdownIcon');
	const chipsContainer = document.getElementById('chipsContainer');

	let activeIndex = -1;
	let currentItems = [];
	const selectedCountries = new Set();

	function renderList(filter = '') {
		list.innerHTML = '';
		activeIndex = -1;

		currentItems = countries.filter((country) =>
			country.toLowerCase().includes(filter.toLowerCase()),
		);

		// ❌ No results
		if (!currentItems.length && filter.trim() !== '') {
			const li = document.createElement('li');
			li.textContent = 'Destination not found';
			li.className = 'px-4 py-2 text-sm text-gray-400 cursor-not-allowed';
			list.appendChild(li);
			list.classList.remove('hidden');
			icon.classList.add('rotate-180');
			return;
		}

		if (!currentItems.length) {
			list.classList.add('hidden');
			icon.classList.remove('rotate-180');
			return;
		}

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

			if (activeIndex >= 0) {
				selectCountry(activeIndex);
				return;
			}

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

	icon.addEventListener('click', () => {
		if (list.classList.contains('hidden')) {
			renderList(input.value);
			input.focus(); // ✅ IMPORTANT
		} else {
			list.classList.add('hidden');
			icon.classList.remove('rotate-180');
		}
	});

	function addChip(country) {
		if (selectedCountries.has(country)) return;

		selectedCountries.add(country);

		const chip = document.createElement('span');
		chip.className =
			'bg-[var(--primary-color)] text-white text-xs px-3 py-1 rounded flex items-center gap-1';

		chip.innerHTML = `${country} <span class="cursor-pointer ml-1">×</span>`;

		chip.querySelector('span').onclick = () => {
			selectedCountries.delete(country);
			chip.remove();
		};

		chipsContainer.appendChild(chip);
	}
});
