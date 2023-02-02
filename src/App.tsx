import { useState } from "react";
import SizeButtons from "./components/SizeButtons";
import ColorButtons from "./components/ColorButtons";
import Grid from "./components/Grid";
import ClearButton from "./components/ClearButton";
import DownloadButtons from "./components/DownloadButtons";
import FillBucketBtn from "./components/FillBucketBtn";

function App() {
  const [size, setSize] = useState(8);
  const [color, setColor] = useState("");
  const [square, setSquare] = useState<string[]>([]);
  const [bucket, setBucket] = useState(false);

  // function to handle grid size
  const handleSize = (size: number) => {
    setSize(size);
  };

  // function to change color of grid
  const changeColor = (color: string, index: number) => {
    if (bucket) {
      fillBucket(color, index);
      setBucket(false);
    } else {
      setSquare((prev) => {
        const newSquare = [...prev];
        newSquare[index] = color;
        return newSquare;
      });
    }
  };

  // function to clear colors
  const clearGrid = () => {
    setSquare([]);
  };

  const downloadImage = (format: "png" | "jpg" | "gif") => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions based on the grid size
    canvas.width = size * 10;
    canvas.height = size * 10;

    // Get all the grid squares
    const squares = document.querySelectorAll(".grid div");

    // Draw each square onto the canvas
    squares.forEach((square, index) => {
      const x = (index % size) * 10;
      const y = Math.floor(index / size) * 10;

      ctx!.fillStyle = window.getComputedStyle(square).backgroundColor;
      ctx?.fillRect(x, y, 10, 10);
    });

    // Generate the image
    const image = canvas.toDataURL(`image/${format}`);

    // Create a download link for the image
    const link = document.createElement("a");
    link.download = `pixel-art-${size}x${size}.${format}`;
    link.href = image;

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fillBucket = (color: string, index: number) => {
    const squares = document.querySelectorAll(".grid div");
    const currentColor = window.getComputedStyle(
      squares[index]
    ).backgroundColor;
    const newSquare = [...square];
    if (currentColor === color) return;
    // search for sqauares with same color that are connected to the clicked square
    // and change their color
    const checkColor = (index: number) => {
      if (index < 0 || index >= size * size) return;
      if (newSquare[index] === color) return;
      if (
        window.getComputedStyle(squares[index]).backgroundColor !== currentColor
      )
        return;
      newSquare[index] = color;
      // if square is on the right edge only check left, top and bottom
      if ((index + 1) % size === 0) {
        checkColor(index - 1);
        checkColor(index + size);
        checkColor(index - size);
        return;
      }
      // if square is on the left edge only check right, top and bottom
      if (index % size === 0) {
        checkColor(index + 1);
        checkColor(index + size);
        checkColor(index - size);
        return;
      }
      // check right
      checkColor(index + 1);
      // check left
      checkColor(index - 1);
      // check bottom
      checkColor(index + size);
      // check top
      checkColor(index - size);
    };
    checkColor(index);
    setSquare(newSquare);
  };

  return (
    <main className='flex flex-col items-center min-h-screen py-2 bg-gradient-to-b from-slate-400 to-slate-800'>
      <h1 className='text-5xl font-semibold underline py-5'>Pixel Art</h1>
      <SizeButtons handleSize={handleSize} />
      <ColorButtons setColor={setColor} />
      <FillBucketBtn bucket={bucket} setBucket={setBucket} />
      <Grid
        size={size}
        changeColor={changeColor}
        color={color}
        square={square}
      />
      <ClearButton clearGrid={clearGrid} />
      <DownloadButtons downloadImage={downloadImage} />
    </main>
  );
}

export default App;

