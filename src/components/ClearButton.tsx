import { AiFillDelete } from "react-icons/ai";

function ClearButton({ clearGrid }: { clearGrid: () => void }) {
  return (
    <button
      title='Clear Grid'
      onClick={clearGrid}
      className='px-4 py-2 m-2 text-white transition bg-red-500 rounded hover:bg-red-700'
    >
      <AiFillDelete className='h-8 w-8' />
    </button>
  );
}

export default ClearButton;
