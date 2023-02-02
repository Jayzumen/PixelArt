import { btnSizes } from "../constants";

function SizeButtons({ handleSize }: { handleSize: (size: number) => void }) {
  return (
    <div className='mt-4'>
      <p className='text-xl font-semibold text-center'>Grid Size</p>
      <div className='flex flex-row flex-wrap'>
        {btnSizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSize(size)}
            className='px-4 py-2 m-2 text-white transition bg-blue-500 rounded hover:bg-blue-700'
          >
            {size}x{size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeButtons;
