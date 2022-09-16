import { Outlet, useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";

const PatientStoriesOutlet = () => {
  const stories = useOutletContext();
  return (
    <>
      <PageHero imgSrc="/assets/img/our-impact/patient-stories/hero.jpeg" />

      <Outlet context={stories} />
    </>
  );
};

export default PatientStoriesOutlet;
