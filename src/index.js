import './style.css';
const form = document.getElementById('form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', addToto);

function addToto(event) {
	if (todoInput.value === '') return;

	const li = document.createElement('li');
	li.className = 'li-style';
	li.textContent = todoInput.value;
	todoList.appendChild(li);
	form.reset();
	event.preventDefault();
}
