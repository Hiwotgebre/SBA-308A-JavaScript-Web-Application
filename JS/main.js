document.addEventListener('DOMContentLoaded', function() {
    const taskManager = new TaskManager();
    taskManager.load();
    taskManager.render();

    const newTaskForm = document.getElementById(newTaskForm);
})