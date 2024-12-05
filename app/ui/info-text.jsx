export function InfoText({ children }) {
  return (
    <div
      className="flex justify-center items-center w-[735px] h-20 
                border border-[#C4BABA] rounded-[85px] bg-custom-gradient 
                backdrop-blur-md px-8 shadow-md"
    >
      <p className="text-4xl pt-4">{children}</p>
    </div>
  );
}
