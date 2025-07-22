document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  // Add task on click
  addBtn.addEventListener("click", addTask);

  // Add task on Enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "flex  items-center justify-between bg-purple-50 border border-purple-200 p-2 rounded";

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "flex-1 p-[7px]";

    const actions = document.createElement("div");
    actions.className = "space-x-2";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "text-green-600 hover:text-green-800";
    completeBtn.addEventListener("click",()=>{
         span.classList.toggle("line-through");
      span.classList.toggle("text-gray-400");
    })

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "text-red-600 hover:text-red-800";
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
    input.value = "";
    input.focus();
  }
});


