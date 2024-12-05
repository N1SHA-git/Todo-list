import { Plus } from "./icons/plus";

export function AddTaskButton() {
  return (
    <button form="inputForm" type="submit">
      <div
        className="backdrop-blur-md bg-custom-gradient border 
          border-[#C4BABA] rounded-full transition-all 
            hover:shadow-xl hover:opacity-85 hover:scale-105"
      >
        <Plus />
      </div>
    </button>
  );
}
