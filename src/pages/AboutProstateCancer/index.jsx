import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";
import { slugToTitle } from "../../util/util";

const AboutProstateCancer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     navigate("page404");
  //   }, []);

  return (
    <>
      <Helmet>
        <title>{slugToTitle(pathname)}</title>
      </Helmet>

      <div className="post-content">
        <Outlet />
      </div>
    </>
  );
};

export default AboutProstateCancer;
