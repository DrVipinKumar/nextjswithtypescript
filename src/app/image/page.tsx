import Image from "next/image";
import React from "react";
import bird from "../../../public/bird.jpg";
const ImagePage = () => {
  return (
    <div>
      <h1>This is Bird Image</h1>
      <Image src={bird} width={300} height={200} alt="Image not Found" />
    </div>
  );
};

export default ImagePage;
