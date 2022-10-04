import PageTitle from "../../../components/PageTitle";
import { Outlet } from "react-router-dom";
// import PostTitle from "../../../components/post-section/PostTitle";
import PageHero from "../../../components/PageHero";

const LivingWithProstateCancer = () => {
  return (
    <div>
      <PageHero
        title="Living with<br/> prostate cancer"
        imgSrc={`/assets/img/about-prostate-cancer/hero.jpeg`}
      />

      {/* <section className="border-none">
        <div className="container">
          <h2>
            <span className="text-8xl text-blue">Living</span>
            <br />
            <span className="text-7xl">with prostate cancer</span>
          </h2>
        </div>
      </section> */}

      {/* <PageTitle p1="" p2="" className="border-none title-light" /> */}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LivingWithProstateCancer;
