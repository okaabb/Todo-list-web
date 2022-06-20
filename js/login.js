(function () {
	let currUser = localStorage.getItem('todoUser');
	if (currUser) {
		window.location.href = '/todo.html';
	}
	document.querySelector('.login').addEventListener('click', function (e) {
		e.preventDefault();
		let email = document.querySelector('.email').value,
			pass = document.querySelector('.pass').value;

		if (!email || !pass) {
			alert('Please fill all fields!');
		} else if (!validateEmail(email)) {
			alert('Please enter a valid email!');
		} else {
			let users = localStorage.getItem('todoUsers');
			if (users) {
				try {
					users = JSON.parse(users);
				} catch (error) {
					users = [];
				}
			} else users = [];
			let loggedUser = users.find((user) => user.email == email.toLowerCase() && pass == user.password);
			if (email == 'admin@5divs.com' && pass == 'admin123') {
				localStorage.setItem(
					'todoUser',
					JSON.stringify({
						email,
						password: pass,
						fname: 'admin',
						lname: '',
					})
				);
				window.location.href = '/admin.html';
			} else if (!loggedUser) {
				alert('Invalid email or password!');
			} else {
				localStorage.setItem('todoUser', JSON.stringify(loggedUser));
				alert('You have successfully logged-in!');
				window.location.href = '/todo.html';
			}
		}
	});
})();
