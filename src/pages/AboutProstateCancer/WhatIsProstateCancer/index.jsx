import { Outlet } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import PageHero from "../../../components/PageHero";

const WhatIsProstateCancer = () => {
  return (
    <>
      <PageHero
        title="What is<br /> Prostate Cancer?"
        imgSrc={`/assets/img/about-prostate-cancer/hero.jpeg`}
      />
      {/* <section className="border-none">
        <div className="container">
          <SectionTitle
            p1="What is"
            p2="Prostate Cancer?"
            className="title-light"
          />
        </div>
      </section> */}

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default WhatIsProstateCancer;
