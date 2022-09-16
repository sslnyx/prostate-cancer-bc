import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./video-gallery.css";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import YTframe from "./YTframe";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

const VideoGallery = ({ data }) => {
  //   console.log(data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const videoHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="-mx-6 md:mx-0">
      <div ref={sliderRef} className="keen-slider bg-darkBlue">
        {data.map(({ id, title }) => (
          <div className="keen-slider__slide number-slide1 relative ">
            <YoutubeIframe videoId={id} />
            {/* <YTframe videoId={id} /> */}

            {/* <div onClick={() => videoHandler(id)}>
              <img
                src="/assets/img/icons/play-btn.svg"
                className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              />
              <img
                className="w-full h-full inner object-cover"
                src={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
                alt=""
              />
            </div> */}
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {data.map(({ id, title }) => (
          <div className="keen-slider__slide number-slide1 relative !h-auto">
            <div className="v-filter w-full h-full absolute left-0 top-0 bg-darkBlue bg-opacity-80"></div>

            <img
              className="w-full h-full inner"
              src={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
              alt=""
            />
          </div>
        ))}

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
