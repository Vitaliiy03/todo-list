const form = document.querySelector("form");
const list = document.querySelector(".todo-list");
const input = document.querySelector("input");



/*
form.addEventListener('submit', (e) => {
	
	e.preventDefault();

	let taskText = document.querySelector(".input-group input").value;
	
	addTask(taskText);
    
});

list.addEventListener('click', function (e) {
	
	if (e.target.tagName == 'INPUT') {
		toggleDone(e.target);
	}
	
	if (e.target.classList.contains('btn-close')) {
		removeTask(e.target);
	}
	
});
*/



function addTask(taskText) {


	if (input.value.trim() === "") {
        
        return alert("Спочатку введіть текст"); 
    }
	list.innerHTML = list.innerHTML + `
        <div class="row justify-content-between task pt-4">
            <div class="col-auto">
                <div class="d-inline align-middle"><input type="checkbox" onclick="toggleDone(this)"></div>
                <div class="d-inline align-middle name">${taskText}</div>
            </div>
            <div class="col-auto text-end mb-3">
                <button type="button" class="btn-close" aria-label="Close" onclick="removeTask(this)"></button>
            </div>
            <div class="border-line mb-4"></div>
        </div>
    `;

	input.value = "";

}

function removeTask(removeButton) {
	removeButton.closest('.row').remove();
}

function toggleDone(checkbox) {
	let row = checkbox.closest('.row');
	
	if (checkbox.checked) {
		row.classList.add('list-done');
	} else {
		row.classList.remove('list-done');
	}
}



function showTasks(taskType) {
	// 1. При кліку отримати елементи всіх задач зі списку
	let tasks = document.querySelectorAll(".task");
	// 2. Для кожного елементу (задачі)
	for (let task of tasks) {
		// 2.1 Отримати елемент Checkbox в задачі
		let checkboxElement = task.querySelector("input[type='checkbox']");
		 // 2.2 Якщо taskType рівне 'всі' тоді показуємо цю задачу 
		if (taskType === 'всі') {
			task.style.display = "block";
		// 2.3 Інакше якщо taskType рівне 'завершені' і чекбокс відмічений показуєму цю задачу
		} else if (taskType === 'завершені' && checkboxElement.checked) {
			task.style.display = "block";
				// якщо такстайп незавершені і чекбокс не відмічений показуємо цю задачу
		} else if (taskType === 'незавершені' && !checkboxElement.checked) {
			task.style.display = "block";
				// інакше приховуємо
		} else {
			task.style.display = "none";
		} 
	}
}
	






	/*
	1. При кліку отримати елементи всіх задач зі списку
	2. Пройтися по кожному елементу 

		2.1 Отримати елемент Checkbox в задачі
		2.2 Якщо taskType рівне 'всі' тоді показуємо цю задачу 
		2.3 Інакше якщо taskType рівне 'завершені'

			2.3.1 Якщо checkbox відмічений тоді показуємо цю задачу
			2.3.2 Інакше приховуєму цю задачу

		2.4 Інакше якщо taskType рівне 'незавершені'

			2.3.1 Якщо checkbox не відмічений тоді показуємо цю задачу
			2.3.2 Інакше приховуєму цю задачу
*/

