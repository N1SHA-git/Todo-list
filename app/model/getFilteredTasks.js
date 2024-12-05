export function getFilteredTasks(tasks, selectedOption) {
  switch (selectedOption) {
    case "Completed":
      return tasks.filter((task) => task.selected);
    case "Incomplete":
      return tasks.filter((task) => !task.selected);
    default: // "ALL"
      return tasks;
  }
}