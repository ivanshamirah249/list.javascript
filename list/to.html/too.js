// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            taskList.removeChild(newTaskItem);
        };
        newTaskItem.appendChild(deleteButton);

        // Add update button
        var updateButton = document.createElement("button");
        updateButton.textContent = "✏️";
        updateButton.onclick = function() {
            var updatedText = prompt("Update task", taskText);
            if (updatedText !== null && updatedText.trim() !== "") {
                newTaskItem.textContent = updatedText.trim();
                taskText = updatedText.trim();
            }
        };
        newTaskItem.appendChild(updateButton);

        taskList.appendChild(newTaskItem);
        taskInput.value = "";
    }
}
