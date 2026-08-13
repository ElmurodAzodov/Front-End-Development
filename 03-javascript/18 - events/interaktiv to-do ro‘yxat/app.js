const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAllBtn = document.getElementById("clearAllBtn");

// Vazifa qo'shish
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Iltimos, vazifa matnini kiriting!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  // Vazifani bajarilgan deb belgilash
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    updateCount();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateCount();
}

// Enter tugmasi bilan qo'shish
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Tugma bilan qo'shish
addBtn.addEventListener("click", addTask);

// Barchasini o'chirish
clearAllBtn.addEventListener("click", () => {
  if (confirm("Barcha vazifalarni o'chirmoqchimisiz?")) {
    taskList.innerHTML = "";
    updateCount();
  }
});

// Vazifalar sonini yangilash
function updateCount() {
  const items = taskList.querySelectorAll("li");
  taskCount.textContent = `${items.length} ta vazifa`;
}

// Dastlabki holat
updateCount();
