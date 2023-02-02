import React from "react";
import { CgColorBucket } from "react-icons/cg";

function FillBucketBtn({
  bucket,
  setBucket,
}: {
  bucket: boolean;
  setBucket: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      title='Fill Bucket'
      className={`${
        !bucket ? "bg-sky-500" : "bg-red-500"
      } py-2 px-6 my-2 rounded-md text-white font-semibold`}
      onClick={() => setBucket(!bucket)}
    >
      <CgColorBucket className='h-10 w-10' />
    </button>
  );
}

export default FillBucketBtn;
