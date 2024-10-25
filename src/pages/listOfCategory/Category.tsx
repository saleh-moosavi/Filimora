import { useState, useRef } from "react";

const images = [
  "https://aiofilm3.ir/wp-content/uploads/2021/12/image_2021-12-26_204042.jpg",
  "https://aiofilm3.ir/wp-content/uploads/2024/09/image_2024-09-30_133714267.jpg",
  "https://aiofilm3.ir/wp-content/uploads/2024/09/image_2024-09-30_224731261.jpg",
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (translateX > 10) prevImage();
      if (translateX < -10) nextImage();
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (translateX > 10) prevImage();
      if (translateX < -10) nextImage();
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)} // To handle dragging outside the slider
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`flex flex-nowrap ${!isDragging && "transition-all duration-300"}`}
        style={{
          transform: `translateX(-${ currentIndex * 100 }%) translateX(${translateX}px)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover select-none"
            draggable="false"
          />
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#9664;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Category;