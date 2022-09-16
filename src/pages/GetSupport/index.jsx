import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";

const GetSupport = () => {
  const { pathname } = useLocation();

  const { static_pages } = useOutletContext();

  return (
    <>
      <PageHero imgSrc={`/assets/img${pathname}/hero.jpeg`} />
      {/* <div className="md:mb-[50px]"></div> */}
      <Outlet context={static_pages} />
      <div className="mb-[100px]"></div>
    </>
  );
};

export default GetSupport;
