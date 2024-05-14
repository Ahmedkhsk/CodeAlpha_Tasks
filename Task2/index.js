document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
            taskInput.focus();
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
        li.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            li.remove();
        });
    }
});
