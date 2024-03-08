import { useState } from "react";

function ProductSlider({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(product);

  return (
    <div className="w-full max-w-[37.5em] overflow-hidden aspect-[1.5] relative">
      <div className="w-full h-full">
        <img
          src={product?.images[currentIndex]?.url}
          className="w-full h-full object-contain"
          alt="images"
        />
      </div>
      <div
        onClick={() => setCurrentIndex(currentIndex - 1)}
        className={`absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-blue-700 text-white cursor-pointer ${
          currentIndex === 0 && "hidden"
        }`}
      >
        <i className="bx bx-left-arrow-alt"></i>
      </div>
      <div
        onClick={() => setCurrentIndex(currentIndex + 1)}
        className={`absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-blue-700 text-white cursor-pointer ${
          currentIndex === product?.images?.length - 1 && "hidden"
        }`}
      >
        <i className="bx bx-right-arrow-alt"></i>
      </div>
    </div>
  );
}

export default ProductSlider;
