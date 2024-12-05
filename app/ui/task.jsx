export function Task({ children, taskActions }) {
  return (
      <div
        className="flex justify-between items-center w-[735px] h-20 
        border border-[#C4BABA] rounded-[85px] bg-custom-gradient 
        backdrop-blur-md px-8 shadow-md overflow-hidden"
      >
        <p className="text-4xl pt-4 truncate">{children}</p>
        {taskActions}
      </div>
  );
}
