import { Outlet, useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";

const WaysToGive = () => {
  const { company } = useOutletContext();
  // console.log(data);

  return (
    <>
      <PageHero imgSrc="/assets/img/ways-to-give/hero.jpeg" />
      <Outlet context={company} />
    </>
  );
};

export default WaysToGive;
