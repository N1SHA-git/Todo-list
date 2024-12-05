export function TodoLayout({ addTask, tasksList, addTaskButton, filter }) {
  return (
    <div className="mt-14 flex gap-9 items-start">
      <div className="flex flex-col items-center gap-16">
        {addTask}
        <ul className="flex flex-col gap-6">{tasksList}</ul>
      </div>
      <div className="flex flex-col items-start justify-start gap-16">
        {addTaskButton}
        {filter}
      </div>
    </div>
  );
}
