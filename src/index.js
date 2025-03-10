document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault()
      
      
      const taskDescription = document.getElementById("new-task-description").value
      
      console.log(taskDescription)

      const taskList = document.getElementById("tasks")
      const newTask = document.createElement("li")
      newTask.textContent = taskDescription
      taskList.appendChild(newTask)
  })
})