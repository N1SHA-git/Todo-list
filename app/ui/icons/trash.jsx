export function Trash({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer transition-all hover:opacity-80"
    >
      <svg width="60" height="42" viewBox="0 0 60 42">
        <rect width="60" height="42" fill="url(#pattern0_2003_9)" />
        <defs>
          <pattern
            id="pattern0_2003_9"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_2003_9"
              transform="matrix(0.00777778 0 0 0.0111111 0.15 0)"
            />
          </pattern>
          <image
            id="image0_2003_9"
            width="90"
            height="90"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO3WTS5EURTE8WJAswWWiKVIfEWviBi1XTDSpMP0Ly95C2jR8Uq9+s3vvTmVm3OOVFVVVVVVVdsBFsAl8MrPvYxnF1s+N1/ANb93NXUd1oA9YL2DoN+Hu5QCOAbuxsJSrYFb4GjKoJfMx3KqkPeBL+bjc6i5QacGPcPWcT9JyGPQR8DNjjYFV2/jyjndMKyqqqr6e4SSG0LJDaHkhlByQyi5IZTcEEpuCCU3hJIbQskNoeSGUHJDKLkhlNwQSm4IJTeEkhtCyQ2h5IZQckMouSGU3BBKbgglN4SSG0LJDaHkhlByQyi5IZTcEEpuCCU3hJIbQskNoeSGUHJDKLkhlNwQSm4IJTeEkhtCyQ2h5IZQckMouSGU3BBKbgglN8CGPB9yAzyR51FugAvynMkNcAg8k2MFHMgRcBoS9go4kbPxZ58P/e2fDcgN8DC0C9ufXFVVVVVVVVUlD9+GFrvEn8LlcgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  );
}
