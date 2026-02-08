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

	if (!voyager) return; // ⛔ only runs on choosePlan.html

	if (plan === 'voyager') {
		voyager.classList.remove('hidden');
		voyagerPlus.classList.add('hidden');
		voyagerBenefits.classList.remove('hidden');
		voyagerPlusBenefits.classList.add('hidden');
		tabVoyager.classList.add('bg-white');
		tabVoyagerPlus.classList.remove('bg-white');
	} else {
		voyagerPlus.classList.remove('hidden');
		voyager.classList.add('hidden');
		voyagerPlusBenefits.classList.remove('hidden');
		voyagerBenefits.classList.add('hidden');
		tabVoyagerPlus.classList.add('bg-white');
		tabVoyager.classList.remove('bg-white');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 640) {
		selectPlan('voyagerplus');
	}
});
