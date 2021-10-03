import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";

export default function CustomCarousel({ slides }) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "keepSnaps",
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img className="embla__slide__img" src={slide.img} />
                {slide.overlay && (
                  <div className="embla__slide__overlay">
                    <p className="embla__slide__overlay__title">
                      {slide.overlay.title}
                    </p>
                    <h2 className="embla__slide__overlay__main">
                      {slide.overlay.main}
                    </h2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
