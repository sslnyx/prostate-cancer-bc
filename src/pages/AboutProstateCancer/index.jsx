import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageHero from "../../components/PageHero";

const AboutProstateCancer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const heroContent = {
    title: "Understanding<br /> Prostate Cancer",
  };

  //   useEffect(() => {
  //     navigate("page404");
  //   }, []);

  return (
    <div>
      <PageHero
        {...heroContent}
        imgSrc={`/assets/img/about-prostate-cancer/hero.jpeg`}
      />
      <div className="mb-[50px]"></div>

      <div className="post-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutProstateCancer;
