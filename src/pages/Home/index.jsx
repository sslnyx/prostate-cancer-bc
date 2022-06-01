import { useEffect, useState } from "react";
import { useOutletContext, useLocation } from "react-router-dom";
import HomeHeroSlider from "../../components/HomeHeroSlider";

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
      <section className="min-h-[600px] bg-blue bg-opacity-20">
        {loaded ? <HomeHeroSlider /> : ""}
      </section>
      {/* {JSON.stringify(frontPageHeroSlide)} */}
    </div>
  );
};

export default Home;
