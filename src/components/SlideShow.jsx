import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

function SlideShow() {
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const images = [
    {
      url: pic1,
    },
    {
      url: pic2,
    },
    {
      url: pic3,
    },
    {
      url: pic4,
    },
    {
      url: pic5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1000px] h-[500px] w-[70%] m-auto py-16 px-4 relative">
      <h1 className=" font-serif font-bold text-center py-4 text-lg  ">
        Populer{" "}
        <span className="text-red-600 underline underline-offset-4 decoration-2 ">
          Now
        </span>
      </h1>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/50 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/50 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex to-4 justify-center py-2">
        {images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            onClick={() => goToSlide(imgIndex)}
            className="text-3xl cursor-pointer ">
            <RxDotFilled className=" text-black/40 hover:text-black" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
