import { useEffect, useState } from "react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
function ProductSlider({ images = []}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  const prevSlide = () => {
    if(!images.length) return;
    setCurrent(current == 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    if(!images.length) return;
    setCurrent(current == images.length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <div className="w-full">
        {/* Anh chinh */}
        <div className="relative">
          <img
            src={images[current]}
            alt=""
            className="w-full h-auto object-cover"
          />
          {/* Prev  */}
          <button 
          className="absolute left-2 top-1/2 text-2xl 
          border rounded-full p-1 
          transition-transform duration-300 hover:-translate-y-2"
          onClick={prevSlide}>
            <GrCaretPrevious />
          </button>
          {/* Next  */}
          <button 
          className="absolute right-2 top-1/2 text-2xl 
          border rounded-full p-1 
          transition-transform duration-300 hover:-translate-y-2"
          onClick={nextSlide}>
            <GrCaretNext />
          </button>
        </div>
        {/* Thumbnail  */}
        <div className="flex gap-3 mt-4">
          {images.map((img, index) => {
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setCurrent(index)}
              className={`w-20 h-auto object-cover rounded cursor-pointer border
                ${current == index ? "border-black" : "border-gray-50"}`}
            />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
