// get the current year for footer copyright
let year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

// Plan Table
function toggleBenefits(id, btn) {
	const section = document.getElementById(id);

	if (section.classList.contains('hidden')) {
		section.classList.remove('hidden');
		btn.innerText = 'Hide benefits';
	} else {
		section.classList.add('hidden');
		btn.innerText = 'Show all benefits';
	}
}

function selectPlan(plan) {
	const voyager = document.getElementById('card-voyager');
	const voyagerPlus = document.getElementById('card-voyagerplus');

	const voyagerBenefits = document.getElementById('voyager-benefits');
	const voyagerPlusBenefits = document.getElementById('voyagerplus-benefits');

	const tabVoyager = document.getElementById('tab-voyager');
	const tabVoyagerPlus = document.getElementById('tab-voyagerplus');

	if (plan === 'voyager') {
		// cards
		voyager.classList.remove('hidden');
		voyagerPlus.classList.add('hidden');

		// benefits
		voyagerBenefits.classList.remove('hidden');
		voyagerPlusBenefits.classList.add('hidden');

		// tabs
		tabVoyager.classList.add('bg-white');
		tabVoyagerPlus.classList.remove('bg-white');
	} else {
		// cards
		voyagerPlus.classList.remove('hidden');
		voyager.classList.add('hidden');

		// benefits
		voyagerPlusBenefits.classList.remove('hidden');
		voyagerBenefits.classList.add('hidden');

		// tabs
		tabVoyagerPlus.classList.add('bg-white');
		tabVoyager.classList.remove('bg-white');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	// Run only on mobile
	if (window.innerWidth < 640) {
		selectPlan('voyagerplus');
	}
});
