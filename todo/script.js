const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button>Delete</button>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});
