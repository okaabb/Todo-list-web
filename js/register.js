(function () {
	let currUser = localStorage.getItem('todoUser');
	if (currUser) {
		window.location.href = '/todo.html';
	}
	document.querySelector('.sign').addEventListener('click', function (e) {
		e.preventDefault();
		let fname = document.querySelector('.fname').value,
			lname = document.querySelector('.lname').value,
			email = document.querySelector('.email').value,
			pass = document.querySelector('.pass').value,
			confirmPass = document.querySelector('.confirmPass').value;

		if (!fname || !lname || !email || !pass || !confirmPass) {
			alert('Please fill all fields!');
		} else if (!validateEmail(email)) {
			alert('Please enter a valid email!');
		} else if (pass.length < 8) {
			alert('Password must be 8 or more characters!');
		} else if (pass != confirmPass) {
			alert("Passwords doesn't match!");
		} else {
			let user = {
					fname,
					lname,
					email: email.toLowerCase(),
					password: pass,
				},
				users = localStorage.getItem('todoUsers');
			if (users) {
				try {
					users = JSON.parse(users);
				} catch (error) {
					users = [];
				}
			} else users = [];
			let dup = users.find((usr) => usr.email == user.email);
			if (dup) {
				alert('Email already exists, please use another email!');
				return;
			}
			users.push(user);
			localStorage.setItem('todoUsers', JSON.stringify(users));
			document.querySelector('.fname').value = '';
			document.querySelector('.lname').value = '';
			document.querySelector('.email').value = '';
			document.querySelector('.pass').value = '';
			document.querySelector('.confirmPass').value = '';
			alert('User Registered Successfully!');
		}
	});
})();
