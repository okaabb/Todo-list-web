let currUser, todos, unKey;
function appendTodo(todo) {
	let todoEl = document.createElement('li');
	todoEl.id = `todo_${todo.id}`;
	todoEl.innerHTML = `
        <label class="chContainer">${todo.todo}
            <input type="checkbox" ${todo.done ? 'checked' : ''} id="${todo.id}" onchange="changeCheckbox(this.id)">
            <span class="checkmark"></span>
        </label>
        <button class="deleteBtn" onclick="deleteTodo(${todo.id})">
            <img src="/img/trash.png"  />
        </button>
    `;
	document.querySelector('.todoList').prepend(todoEl);
}
function changeCheckbox(id) {
	todos = JSON.parse(localStorage.getItem(unKey)) || [];
	let fIdx = todos.findIndex((todo) => todo.id == id);
	if (fIdx != -1) {
		todos[fIdx].done = !todos[fIdx].done;
		localStorage.setItem(unKey, JSON.stringify(todos));
	}
}
function deleteTodo(id) {
	todos = JSON.parse(localStorage.getItem(unKey)) || [];
	let fIdx = todos.findIndex((todo) => todo.id == id);
	if (fIdx != -1) {
		document.getElementById(`todo_${id}`).remove();
		todos.splice(fIdx, 1);
		localStorage.setItem(unKey, JSON.stringify(todos));
	}
}
function addTodo(e) {
	e.preventDefault();
	let todoInp = document.querySelector('.todoInp');
	let todo = todoInp.value;
	if (!todo) return;
	todos = JSON.parse(localStorage.getItem(unKey)) || [];
	let todoObj = {
		id: `${todos.length}`,
		todo,
		done: false,
	};
	todos.push(todoObj);
	localStorage.setItem(unKey, JSON.stringify(todos));
	appendTodo(todoObj);
	todoInp.value = '';
}
(function () {
	currUser = localStorage.getItem('todoUser');
	if (!currUser) {
		window.location.href = '/login.html';
	}
	currUser = JSON.parse(currUser);

	if (currUser.email == 'admin@5divs.com' && currUser.password == 'admin123') {
		window.location.href = '/admin.html';
	}
	unKey = currUser.email;
	// unKey = unKey.split('@')[0];
	unKey = `${unKey}_todos`;
	todos = JSON.parse(localStorage.getItem(unKey)) || [];
	todos.map((todo) => appendTodo(todo));
	document.querySelector('.todoInp').addEventListener('keyup', function (e) {
		var key = e.key || e.keyCode;

		if (key === 'Enter' || key === 13) {
			addTodo(e);
		}
	});
	document.querySelector('.addButton').addEventListener('click', addTodo);
})();
