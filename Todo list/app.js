// Retrieve todos from local storage or create an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to display todos on the page
function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.setAttribute('data-index', index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = deleteTodo;

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const newTodo = todoInput.value.trim();

    if (newTodo !== '') {
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        displayTodos();
    }
}

// Function to delete a todo
function deleteTodo() {
    const index = parseInt(this.parentNode.getAttribute('data-index'));
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

// Display initial todos
displayTodos();