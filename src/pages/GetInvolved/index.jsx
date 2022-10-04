import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { slugToTitle } from "../../util/util";

import { Helmet } from "react-helmet-async";
const GetInvolved = () => {
  const {
    events: { nodes },
  } = useOutletContext();

  const { pathname } = useLocation();

  return (
    <div>
      <Helmet>
        <title>{slugToTitle(pathname)}</title>
      </Helmet>
      <Outlet context={nodes} />

      <div className="mb-10"></div>
    </div>
  );
};

export default GetInvolved;
