import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import GalleryArrow from "./bttons/GalleryArrow";

import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./index.css";

const Gallery = ({ gallery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const { storySlug } = useParams;

  useEffect(() => {
    return () => {
      loaded && setLoaded(false);
    };
  }, []);

  return (
    <>
      {gallery.length > 1 ? (
        <div ref={sliderRef} className="keen-slider bg-darkBlue">
          {gallery.map(({ id, srcSet, sourceUrl }, i) => (
            <div
              key={id ? id : i}
              className="keen-slider__slide number-slide1 outer-9_16"
            >
              <div className="inner">
                <img
                  className="w-full h-full object-cover"
                  srcSet={srcSet ? srcSet : sourceUrl}
                  alt=""
                />
              </div>
            </div>
          ))}

          {loaded && instanceRef.current && (
            <>
              <div
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="w-[20%] h-full absolute left-0 bg-gradient-to-r from-darkBlue to-transparent"
              >
                <GalleryArrow left disabled={currentSlide === 0} />
              </div>
              <div
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="w-[20%] h-full absolute right-0 bg-gradient-to-l from-darkBlue to-transparent"
              >
                <GalleryArrow
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div className=" outer-9_16">
          <div className="inner">
            <img
              srcSet={gallery[0].srcSet ? gallery[0].srcSet : gallery[0].sourceUrl}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
