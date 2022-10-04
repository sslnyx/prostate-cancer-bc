import { useRef } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { slugToTitle } from "../../util/util";

const OurImpact = () => {
  const { stories, grantYears } = useOutletContext();

  const { pathname } = useLocation();

  // console.log(pathname);

  return (
    <>
      <Helmet>
        <title>{slugToTitle(pathname)}</title>
      </Helmet>
      <Outlet context={{ stories, grantYears }} />
    </>
  );
};

export default OurImpact;
