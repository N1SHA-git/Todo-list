export function TaskActions({ trash, checkMark }) {
  return (
    <div className="flex items-center gap-5">
      {checkMark}
      {trash}
    </div>
  );
}
