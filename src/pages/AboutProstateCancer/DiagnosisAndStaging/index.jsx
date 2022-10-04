import { Outlet } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import PageHero from "../../../components/PageHero";

const DiagnosisAndStaging = () => {
  return (
    <div>
      <PageHero
        title="DIAGNOSIS<br/> AND STAGING"
        imgSrc={`/assets/img/about-prostate-cancer/hero.jpeg`}
      />
      {/* <section className="border-none">
        <div className="container">
          <SectionTitle
            p1="Diagnosis"
            p2="And Staging"
            className="title-light"
          />
        </div>
      </section> */}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DiagnosisAndStaging;
