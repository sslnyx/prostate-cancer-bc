import SectionTitle from "../../../components/SectionTitle";
import PageTitle from "../../../components/PageTitle";
import { Outlet } from "react-router-dom";
import PageHero from "../../../components/PageHero";

const Treatment = () => {
  return (
    <div>
      <PageHero
        title="Treatment"
        imgSrc={`/assets/img/about-prostate-cancer/hero.jpeg`}
      />
      {/* <PageTitle title="Treatment" className="border-none" /> */}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Treatment;
