const todoList = document.querySelector("#todo-list");
const progress = document.querySelector("#progress");

function updateProgress() {
  const items = [...todoList.querySelectorAll(".todo-item")];
  const completedCount = items.filter((item) =>
    item.classList.contains("completed")
  ).length;
  progress.textContent = `${completedCount} of ${items.length} tasks completed`;
}

function toggleTask(item) {
  const isCompleted = item.classList.toggle("completed");
  item.setAttribute("aria-pressed", String(isCompleted));
  updateProgress();
}

todoList.querySelectorAll(".todo-item").forEach((item) => {
  item.addEventListener("click", () => toggleTask(item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTask(item);
    }
  });
});

updateProgress();
