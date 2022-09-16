import { Outlet } from "react-router-dom";
import PageHero from "../../components/PageHero";

const WaysToGive = () => {
  return (
    <>
      <PageHero imgSrc="/assets/img/ways-to-give/hero.jpeg" />
      <Outlet />
    </>
  );
};

export default WaysToGive;
