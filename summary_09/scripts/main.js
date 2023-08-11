const todosArray = [
    {
        id: 1,
        title: 'Верстка - повторение CSS',
        descripton: 'Очень важное дело',
        isCompleted: false,
        priority: 5
    },
    {
        id: 2,
        title: 'Изучение JavaScript',
        descripton: 'Тоже важное дело',
        isCompleted: false,
        priority: 3
    },
    {
        id: 3,
        title: 'Чтение документации MDN',
        descripton: 'Сделать по свободе',
        isCompleted: true,
        priority: 3
    }
];

let mainContainer = document.querySelector('.todoListContainer');

function renderTodo(todo) {

    let todoContainer = document.createElement('div');
    let todoTextBlock = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    let todoHeader = document.createElement('h3');
    todoHeader.classList.add('todoHeader');
    todoHeader.innerText = todo.title;

    let todoDescription = document.createElement('p');
    todoDescription.classList.add('todoDescription');
    todoDescription.innerText = todo.descripton;
    let todoStatus = document.createElement('p');
    todoStatus.classList.add('todoStatus');

    todoStatus.innerText = todo.isCompleted ? 'Выполнено' : 'Не выполнено';

    todoTextBlock.append(todoHeader,todoDescription,todoStatus);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    if (todo.isCompleted) {
        todoStatus.classList.add('todoCompleted');
        //checkbox.setAttribute('checked', true);
        checkbox.checked = true;
        // применить к todoStatus класс todoCompleted
        // установаить у checkbox атрибут checked = true
    }
    else {
        todoStatus.classList.add('todoIncompleted');
        //checkbox.removeAttribute('checked');
        checkbox.checked = false;
        // применить к todoStatus класс todoIncompleted
        // удалить у checkbox атрибут checked
    }

    todoContainer.append(todoTextBlock,checkbox);
    //mainContainer.append(todoContainer);

    return todoContainer;
}

function renderTodos() {
    todosArray.forEach( (item) => {
        mainContainer.append( renderTodo(item) );
    });
}

renderTodos();