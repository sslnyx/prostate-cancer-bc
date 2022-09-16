import { Outlet, useOutletContext } from "react-router-dom";

const OurImpact = () => {
  const {
    stories,
    grantYears,
  } = useOutletContext();

  return (
    <>
      <Outlet context={{ stories, grantYears }} />
    </>
  );
};

export default OurImpact;
