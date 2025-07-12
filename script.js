// Select DOM elements
let todoBtn = document.querySelector("button"); // Add Task button
let todoInput = document.querySelector("input"); // Input field for entering tasks
let ul = document.querySelector("ul"); // Unordered list to hold tasks

// Function to add tasks
const addTasks = () => {
  let value = todoInput.value.trim(); // Get and trim input value
  let listText = document.createElement("li"); // Create a new list item (li)
  listText.className = "list-text"; // Assign a class for styling

  // Check if the input is empty
  if (value === "") {
    alert("Please enter a task");
    return; // Stop function if no input
  }

  // Create delete (trash) icon using Font Awesome
  let deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash"; // Font Awesome trash icon class

  // Add the task text to the list and append to <ul>
  ul.appendChild(listText).innerText = value;

  // Append delete icon to the list item
  listText.appendChild(deleteBtn);

  // Add toggle functionality on task click to mark it as completed
  listText.addEventListener("click", function () {
    listText.classList.toggle("checked"); // Toggle checked class (e.g., line-through)
  });

  // Add functionality to delete the task on delete icon click
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering parent (li) click
    ul.removeChild(listText); // Remove the task
  });
};

// Event listener for button click
todoBtn.addEventListener("click", function () {
  addTasks(); // Call function to add task
  todoInput.value = ""; // Clear the input field
});

// Event listener for Enter key press
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTasks(); // Call function on Enter key
    todoInput.value = ""; // Clear the input field
  }
});
