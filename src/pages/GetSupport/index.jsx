import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";
import { slugToTitle } from "../../util/util";
import { Helmet } from "react-helmet-async";

const GetSupport = () => {
  const { pathname } = useLocation();
  const { static_pages } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>{slugToTitle(pathname)}</title>
      </Helmet>
      <PageHero imgSrc={`/assets/img${pathname}/hero.jpeg`} />
      {/* <div className="md:mb-[50px]"></div> */}
      <Outlet context={static_pages} />
      <div className="mb-[50px]"></div>
    </>
  );
};

export default GetSupport;
