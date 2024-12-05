import { ArrowDown } from "./icons/arrow-down";

const options = ["ALL", "Completed", "Incomplete"];

export function Filter({ isOpen, selectOption, selectedOption, toggleSelect }) {
  return (
    <div className="relative select-none">
      <div
        className="flex justify-between items-center px-6 w-[250px] h-16 
            border border-[#C4BABA] rounded-sm bg-custom-gradient 
            backdrop-blur-md"
        onClick={toggleSelect}
      >
        <span className="text-2xl leading-tight font-bold pt-3">
          {selectedOption}
        </span>
        <ArrowDown
          className={
            isOpen
              ? " transition-transform rotate-180"
              : "transition-transform rotate-0"
          }
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-6 h-12
                  border border-[#C4BABA] border-t-0 rounded-sm bg-custom-gradient 
                  backdrop-blur-md"
              onClick={() => selectOption(option)}
            >
              <span className="text-2xl leading-tight font-bold pt-4">
                {option}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
