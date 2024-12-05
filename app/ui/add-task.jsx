export function AddTaskForm({ onChange, value, onSubmit }) {
  return (
    <form id="inputForm" action="" method="" onSubmit={onSubmit}>
      <label htmlFor="addTask" className="hidden">
        Введите задачу
      </label>
      <input
        type="text"
        id="addTask"
        name="addTask"
        value={value}
        onChange={onChange}
        className="
          pt-2 pl-4 w-[735px] h-20 rounded-lg border border-[#C4BABA] 
          backdrop-blur-md text-[40px] focus:outline-none"
        style={{
          background:
            "linear-gradient(to top right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.25))",
        }}
      />
    </form>
  );
}
