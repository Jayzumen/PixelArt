import { colors } from "../constants";
import { BsEraserFill } from "react-icons/bs";

function ColorButtons({ setColor }: { setColor: (color: string) => void }) {
  return (
    <div className='mt-6'>
      <p className='text-xl font-semibold text-center'>Color Palette</p>

      <div className='flex flex-row flex-wrap gap-2 m-2 p-2 border border-black'>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setColor(color)}
            title={color.split("-")[1]}
            className={`h-10 w-10 ${color} rounded border border-black`}
          ></button>
        ))}

        {/* Clear Color Button */}
        <button
          title='Eraser'
          onClick={() => setColor("")}
          className='h-10 w-10 font-bold rounded border border-black'
        >
          <BsEraserFill className='h-8 w-8 ' />
        </button>
      </div>
    </div>
  );
}

export default ColorButtons;
