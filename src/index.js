let storage = localStorage;
let container = document.querySelector('#container')

let ul = document.createElement('ul');
container.appendChild(ul);

let input = document.createElement('input');
document.body.appendChild(input);

let button = document.createElement('button');
document.body.appendChild(button);
document.querySelector('button').innerHTML = 'Далее';


window.onload = function () {
	if (storage.getItem('tasks')) {
		updateList(storage.getItem('tasks'));
	}
	else {
		storage.setItem('tasks', '');
	}
}


button.addEventListener('click', buttonHandler);
document.addEventListener('keypress', inputHandler);

function buttonHandler() {
	let task = input.value;
	if (task.length == 0) return;
	input.value = '';
	storage.setItem('tasks', storage.getItem('tasks') + `${task} `);
	updateList(storage.getItem('tasks'));
}

function inputHandler(event) {
	if (event.keyCode === 13) {
		buttonHandler();
	}
}

//update and sort
function updateList(e) {
	ul.innerHTML = '';
	let arrOfTasks = e.split(' ');
	arrOfTasks = arrOfTasks.sort();
	arrOfTasks.shift(); //delete first element and return in ul.innerHTML
	for (task of arrOfTasks) {
		ul.innerHTML += `<li> ${task} </li>`;
	}
}