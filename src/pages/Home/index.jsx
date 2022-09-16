import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import HomeHeroSlider from "./HomeHeroSlider";
import OurVision from "./OurVision";
import OurInitiatives from "./OurInitiatives";
import TakeAction from "../../components/TakeAction";
import HomeStories from "./HomeStories";
import HomeEvents from "./HomeEvents";

const Home = () => {
  //   const { pathname } = useLocation();
  //   const {
  //     data: {
  //       pages: { nodes },
  //     },
  //   } = useOutletContext();
  const { loaded } = useOutletContext();
  //   const { frontPageHeroSlide } = nodes.find(({ uri }) => uri === pathname);

  return (
    <div>
      <HomeHeroSlider />
      <OurVision />
      <OurInitiatives />

      <section className="md:h-[700px] overflow-hidden">
        <img
          className="w-full h-full min-h-[300px] object-cover object-[40%_10%]"
          src="/assets/img/home/faces-of-pc/faces-of-pc.jpg"
        />
      </section>

      <HomeStories />

      <HomeEvents />

      <section className="pb-0">
        <TakeAction />
      </section>
    </div>
  );
};

export default Home;
