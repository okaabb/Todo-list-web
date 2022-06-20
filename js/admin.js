(function () {
	let currUser = localStorage.getItem('todoUser');
	if (!currUser) {
		window.location.href = '/login.html';
	}
	currUser = JSON.parse(currUser);
	if (currUser.email != 'admin@5divs.com' && currUser.password != 'admin123') {
		window.location.href = '/todo.html';
	}
	let homeBgColor = localStorage.getItem('homeBgColor'),
		homeTitleColor = localStorage.getItem('homeTitleColor'),
		homeTitleSize = localStorage.getItem('homeTitleSize');
	if (homeBgColor) document.getElementById('homeBgColor').value = homeBgColor;
	if (homeTitleColor) document.getElementById('homeTitleColor').value = homeTitleColor;
	if (homeTitleSize) document.getElementById('homeTitleSize').value = homeTitleSize;

	document.querySelector('.save').addEventListener('click', function (e) {
		let homeBgColor = document.getElementById('homeBgColor').value,
			homeTitleColor = document.getElementById('homeTitleColor').value,
			homeTitleSize = document.getElementById('homeTitleSize').value;
		if (homeBgColor) localStorage.setItem('homeBgColor', homeBgColor);
		if (homeTitleColor) localStorage.setItem('homeTitleColor', homeTitleColor);
		if (homeTitleSize) localStorage.setItem('homeTitleSize', homeTitleSize);
		alert('Saved!');
	});
})();
