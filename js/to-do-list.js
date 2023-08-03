document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('newTodo');
    const addTodoButton = document.getElementById('addTodo');
    const todosContainer = document.getElementById('todos');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            const todoItem = createTodoItem(todoText);
            todosContainer.appendChild(todoItem);
            newTodoInput.value = '';
        }
    });

    function createTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', handleTodoCheckbox);

        const todoText = document.createElement('span');
        todoText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoItem.classList.add('deleted');
            setTimeout(() => {
                todoItem.remove();
            }, 1000);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        return todoItem;
    }

    function handleTodoCheckbox(event) {
        const todoItem = event.target.parentNode;
        if (event.target.checked) {
            todoItem.classList.add('checked');
            playDingSound();
        } else {
            todoItem.classList.remove('checked');
        }
        todosContainer.appendChild(todoItem);
    }

    function playDingSound() {

        const dingSound = document.getElementById('dingSound');

        // Check if the audio element exists and is supported
        if (dingSound && typeof dingSound.play === 'function') {
            // Play the 'ding' sound
            dingSound.play();
        }
        else {
            alert("error");
        }

    }
});
