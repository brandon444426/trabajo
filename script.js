const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = taskInput.value;
    
    if (newTask !== '') {
        const li = document.createElement('li');
        li.textContent = newTask;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});