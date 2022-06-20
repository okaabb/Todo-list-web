function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
(function () {
	let currUser = localStorage.getItem('todoUser');
	if (currUser) {
		if (document.querySelector('.auth')) document.querySelector('.auth').style.display = 'none';
		if (document.querySelector('.loggedIn')) document.querySelector('.loggedIn').style.display = 'inline-block';
	}

	document.querySelector('.logout').addEventListener('click', function (e) {
		e.preventDefault();
		localStorage.removeItem('todoUser');
		window.location.href = '/login.html';
	});
})();
