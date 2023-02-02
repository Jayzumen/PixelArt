function Grid({
  size,
  changeColor,
  color,
  square,
}: {
  size: number;
  changeColor: (color: string, index: number) => void;
  color: string;
  square: string[];
}) {
  return (
    <div className='bg-slate-200'>
      {size && (
        <div
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
          }}
          className={`grid`}
        >
          {Array(size * size)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`h-10 w-10 ${square[i]} border border-gray-500`}
                onClick={() => changeColor(color, i)}
              ></div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Grid;
