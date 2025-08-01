import React, { useEffect, useState } from 'react'

function HomeSlider() {
  const slides = [
    { id: 1, img: "https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg", alt: "Electronics Sale" },
    { id: 2, img: "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg", alt: "Fashion Collection" },
    { id: 3, img: "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg", alt: "Headphones & Gadgets" },
    { id: 4, img: "https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg", alt: "Home & Kitchen Deals" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  // Manual slide change
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="mt-3 relative">
      <div className="w-full rounded-2xl h-[50vh] overflow-hidden relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Manual buttons (always visible) */}
        <div className="absolute inset-0 flex items-center justify-between px-5 z-20">
          <button
            onClick={() => goToSlide(current === 0 ? slides.length - 1 : current - 1)}
            className="btn btn-circle bg-myColor border-none text-white hover:bg-myColor/90"
          >
            ❮
          </button>
          <button
            onClick={() => goToSlide(current === slides.length - 1 ? 0 : current + 1)}
            className="btn btn-circle bg-myColor border-none text-white hover:bg-myColor/90"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
