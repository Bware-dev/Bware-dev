document.addEventListener('DOMContentLoaded', () => {
	const explorer = document.getElementById('explorer');

	document.addEventListener('keydown', (event) => {
		if (event.key === 'h') {
			explorer.classList.toggle('open');
		}
	});
});
