import clsx from "clsx";

export function CheckMark({ selected, onChange }) {
  return (
    <label className="cursor-pointer">
      <p className="hidden">Выполнить задачу</p>
      <input
        type="checkbox"
        className="hidden"
        checked={selected}
        onChange={onChange}
      />
      <div
        className={clsx(
          "w-10 h-10 flex items-center justify-center rounded-full border-4 border-white transition-all hover:opacity-80",
          selected ? "bg-white" : "",
        )}
      >
        {selected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="black"
            width="25"
            height="25"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
}
