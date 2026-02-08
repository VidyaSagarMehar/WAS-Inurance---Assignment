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
