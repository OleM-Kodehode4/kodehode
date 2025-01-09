const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#user-input");
const listContainer = document.querySelector("#list-container");

let tasks = [];

// Henter fra localStorage hvis det er noe der.
const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  // Gjør en if sjekk på om storedTask er undefined eller ikke.
  tasks = JSON.parse(storedTasks);
  renderTask();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(taskForm);

  tasks.push({
    timeStamp: new Date().toLocaleString("nn-NO"),
    description: formData.get("user-input"),
    completed: false,
  });
  saveToLocalStorage();
  renderTask();
});

function renderTask() {
  // Tøm list-container i HTML dokumentet
  while (listContainer.firstChild) {
    listContainer.firstChild.remove();
  }

  tasks.forEach((task, index) => {
    // Bygg opp HTML elementer for å vise tasks på nettsiden
    // Bygg en task-container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // Vis timeStamp
    const timeStampElem = document.createElement("p");
    timeStampElem.classList.add("timestamp");
    timeStampElem.textContent = task.timeStamp;

    // Vis description
    const descriptionElem = document.createElement("input");
    descriptionElem.type = "text";
    descriptionElem.classList.add("description");
    descriptionElem.value = task.description;
    descriptionElem.readOnly = true;

    // Vis en task completed checkbox
    const taskCompletedElem = document.createElement("input");
    taskCompletedElem.type = "checkbox";
    taskCompletedElem.checked = task.completed;

    if (taskCompletedElem.checked) {
      descriptionElem.classList.add("checked");
      taskContainer.classList.add("checkedbg");
    } else {
      descriptionElem.classList.remove("checked");
      taskContainer.classList.remove("checkedbg");
    }

    taskCompletedElem.classList.add("completed-checkbox");
    taskCompletedElem.addEventListener("change", () => {
      if (taskCompletedElem.checked) {
        descriptionElem.classList.add("checked");
        taskContainer.classList.add("checkedbg");
      } else {
        descriptionElem.classList.remove("checked");
        taskContainer.classList.remove("checkedbg");
      }
      tasks[index].completed = taskCompletedElem.checked;
      saveToLocalStorage();
    });

    // Edit button
    const editButtonElem = document.createElement("button");
    editButtonElem.textContent = "Endre";
    editButtonElem.classList.add("edit-button");
    editButtonElem.addEventListener("click", () => {
      if (descriptionElem.readOnly) {
        descriptionElem.readOnly = false;
        descriptionElem.focus();
        editButtonElem.textContent = "Lagre";
      } else {
        tasks[index].description = descriptionElem.value;
        saveToLocalStorage();
        descriptionElem.readOnly = true;
        editButtonElem.textContent = "Endre";
      }
    });

    // Delete button
    const deleteButtonElem = document.createElement("button");
    deleteButtonElem.textContent = "Slett";
    deleteButtonElem.classList.add("delete-button");

    // Add delete functionality
    deleteButtonElem.addEventListener("click", () => {
      // Remove task from tasks array
      tasks.splice(index, 1);

      // Update localStorage with the new tasks array
      saveToLocalStorage();

      // Re-render the task list to reflect the change
      renderTask();
    });

    // Append items
    taskContainer.prepend(
      timeStampElem,
      descriptionElem,
      taskCompletedElem,
      editButtonElem,
      deleteButtonElem
    );
    listContainer.prepend(taskContainer);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
