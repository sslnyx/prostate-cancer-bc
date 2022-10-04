import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { useLocation, useOutletContext } from "react-router-dom";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import "keen-slider/keen-slider.min.css";

const HomeHeroSlider = () => {
  const { pathname } = useLocation();

  const {
    pages: { nodes },
  } = useOutletContext();

  const {
    frontPageHeroSlide: { frontPageHeroSlide },
  } = nodes.find(({ uri }) => uri === pathname);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
    // [
    //   (slider) => {
    //     let timeout;
    //     let mouseOver = false;
    //     function clearNextTimeout() {
    //       clearTimeout(timeout);
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout);
    //       if (mouseOver) return;
    //       timeout = setTimeout(() => {
    //         slider.next();
    //       }, 3000);
    //     }
    //     slider.on("created", () => {
    //       slider.container.addEventListener("mouseover", () => {
    //         mouseOver = true;
    //         clearNextTimeout();
    //       });
    //       slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false;
    //         nextTimeout();
    //       });
    //       nextTimeout();
    //     });
    //     slider.on("dragStarted", clearNextTimeout);
    //     slider.on("animationEnded", nextTimeout);
    //     slider.on("updated", nextTimeout);
    //   },
    // ]
  );

  return (
    <div className="py-0">
      <div ref={sliderRef} className="keen-slider md:h-[600px]">
        {frontPageHeroSlide.map(
          ({ learnMore, title, description, image: { sourceUrl } }, i) => (
            <div
              key={i}
              className="keen-slider__slide relative bg-darkBlue flex flex-col"
            >
              <div className="text-white absolute w-full top-[50%] translate-y-[-50%] z-10 hidden md:block">
                <div className="container !max-w-[1536px]">
                  <h2 className="text-white max-w-[450px] mb-5 text-8xl">
                    {title}
                  </h2>

                  <p className="max-w-[600px] text-2xl mb-5">{description}</p>

                  {i === 0 ? (
                    <div className="flex -mx-5 mb-5">
                      <img
                        className="px-5"
                        src="/assets/img/logos/pcf-logo-white.png"
                      />

                      <a
                        className="px-5"
                        target="_blank"
                        href="https://prostatecancersupport.ca"
                      >
                        <img src="/assets/img/logos/pcfca-logo-white.png" />
                      </a>
                    </div>
                  ) : (
                    ""
                  )}

                  {learnMore ? (
                    <PrimaryBtn
                      className="btn-main"
                      target="_blank"
                      href={learnMore}
                    >
                      Learn More
                    </PrimaryBtn>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex flex-wrap flex-col md:flex-row md:h-full text-white flex-1">
                <div className="basis-auto relative md:basis-7/12 order-1 md:order-2 h-[350px] md:h-full">
                  <div className="bg-gradient-to-t md:bg-gradient-to-r from-darkBlue to-transparent w-full md:w-[20%] h-[20%] md:h-full absolute -bottom-1 md:top-0 md:-left-1"></div>

                  <img
                    className="h-full w-full object-cover md:h-full"
                    src={sourceUrl}
                  />
                </div>

                <div className="basis-auto order-2 md:order-1 md:basis-5/12 px-[22px] py-[50px] md:p-[50px] flex items-center justify-center flex-1">
                  <div className="relative flex-col text-center items-center md:hidden">
                    <h2 className="text-white">{title}</h2>
                    <p className="">{description}</p>
                    {i === 0 ? (
                      <div className="flex justify-center">
                        <div className="flex -mx-3 mb-5 items-center justify-center max-w-[500px]">
                          <div className="px-3 basis-[62%]">
                            <img className="w-full" src="/assets/img/logos/pcf-logo-white.png" />
                          </div>
                          <a
                            className="px-3 basis-[38%]"
                            target="_blank"
                            href="https://prostatecancersupport.ca"
                          >
                            <img
                              className="h-full w-full"
                              src="/assets/img/logos/pcfca-logo-white.png"
                            />
                          </a>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {learnMore ? (
                      <PrimaryBtn
                        className="btn-main"
                        target="_blank"
                        href={learnMore}
                      >
                        Learn More
                      </PrimaryBtn>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeHeroSlider;
