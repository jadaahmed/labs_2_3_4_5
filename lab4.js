class Task {
      constructor(description) 
      {
        this.description = description;
        this.completed = false;
      }
    }

    const tasks = [];
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
      const description = taskInput.value.trim();
      if (description == "") return;

      const li = document.createElement('li');
      li.textContent = description;

      const delBtn = document.createElement('button');
      delBtn.textContent = "Delete";
      delBtn.classList.add('delete-btn');

      li.appendChild(delBtn);
      taskList.appendChild(li);

      const task = new Task(description, li);
      tasks.push(task);

      li.addEventListener('click', (e) => {
        if (e.target === delBtn) 
            return;
        if (task.completed) 
            {
        task.completed = false;
        li.classList.remove('completed');
        } 
        else {
        task.completed = true;
        li.classList.add('completed');
        }
      });

      delBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        const index = tasks.indexOf(task);
        if (index > -1) tasks.splice(index, 1);
      });

      taskInput.value = "";
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') 
        addTask();
    });