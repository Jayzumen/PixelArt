function DownloadButtons({
  downloadImage,
}: {
  downloadImage: (format: "png" | "jpg" | "gif") => void;
}) {
  return (
    <div>
      {/* Download as PNG */}
      <button
        title='Download as PNG'
        onClick={() => downloadImage("png")}
        className='px-4 py-2 m-2 text-white transition bg-green-500 rounded hover:bg-green-700'
      >
        Download as PNG
      </button>

      {/* Download as JPG */}
      <button
        title='Download as JPG'
        onClick={() => downloadImage("jpg")}
        className='px-4 py-2 m-2 text-white transition bg-green-500 rounded hover:bg-green-700'
      >
        Download as JPG
      </button>

      {/* Download as GIF */}
      <button
        title='Download as GIF'
        onClick={() => downloadImage("gif")}
        className='px-4 py-2 m-2 text-white transition bg-green-500 rounded hover:bg-green-700'
      >
        Download as GIF
      </button>
    </div>
  );
}

export default DownloadButtons;
