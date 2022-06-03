import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { useLocation, useOutletContext } from "react-router-dom";
import "keen-slider/keen-slider.min.css";

const HomeHeroSlider = () => {
  const { pathname } = useLocation();

  const {
    data: {
      pages: { nodes },
    },
  } = useOutletContext();

  const {
    frontPageHeroSlide: { frontPageHeroSlide },
  } = nodes.find(({ uri }) => uri === pathname);

  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={refCallback} className="keen-slider h-full">
      {frontPageHeroSlide.map(
        ({ learnMore, title, description, image: { sourceUrl } }) => (
          <div className="keen-slider__slide">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <img className="h-full basis-1/2" src={sourceUrl} alt="" />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HomeHeroSlider;
