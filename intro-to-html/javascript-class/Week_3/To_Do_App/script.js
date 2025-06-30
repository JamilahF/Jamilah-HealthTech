// Get all the elements we need from the page
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load saved tasks or start with an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    // Create a new task object
    const newTask = {
      id: Date.now(), // Unique ID using current timestamp
      text: taskText,
      completed: false
    };
    
    // Add to our tasks array
    tasks.push(newTask);
    
    // Save to local storage
    saveTasks();
    
    // Clear the input
    taskInput.value = '';
    
    // Update the display
    displayTasks();
  }
}

// Function to display all tasks
function displayTasks() {
  // Clear the current list
  taskList.innerHTML = '';
  
  // Add each task to the list
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleComplete(task.id));
    
    // Create task text
    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
      taskText.style.color = '#888';
    }
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    
    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(task.id));
    
    // Put everything together
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    
    // Add to the list
    taskList.appendChild(taskItem);
  });
}

// Function to toggle task completion status
function toggleComplete(taskId) {
  // Find the task in our array
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    // Toggle the completed status
    task.completed = !task.completed;
    saveTasks();
    displayTasks();
  }
}

// Function to delete a task
function deleteTask(taskId) {
  // Keep only tasks that don't match this ID
  tasks = tasks.filter(task => task.id !== taskId);
  saveTasks();
  displayTasks();
}

// Function to edit a task
function editTask(taskId) {
  // Find the task
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    // Ask for new text
    const newText = prompt('Edit your task:', task.text);
    
    // If they entered something (not cancelled)
    if (newText !== null) {
      task.text = newText.trim();
      saveTasks();
      displayTasks();
    }
  }
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Set up event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Display tasks when page loads
displayTasks();