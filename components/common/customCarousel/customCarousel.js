import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import * as React from "react";
import { IconButton } from "@material-ui/core";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export default function CustomCarousel({ slides, showLeftButton = false }) {
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      containScroll: "keepSnaps",
      draggable: true,
    },
    typeof window !== "undefined" ? [WheelGesturesPlugin()] : []
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollTo(slides.length / 2);
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      {showLeftButton && (
        <IconButton
          className="embla__prev"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={slide.img}
                  alt={slide.alt}
                />
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
