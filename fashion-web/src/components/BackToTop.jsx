import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [onDarkBg, setOnDarkBg] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const ob = new IntersectionObserver(
      ([e]) => setOnDarkBg(e.isIntersecting),
      { threshold: 0 }
    );
  ob.observe(footer);
  return () => ob.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={` fixed
        bottom-[15px] right-[15px] z-50
        flex 
        items-center
        justify-center 
        z-50 w-10 h-10 
        rounded-full 
        border-2
        ${onDarkBg ? "bg-white text-black" : "bg-black text-white border-black"}
        `}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default BackToTop;
