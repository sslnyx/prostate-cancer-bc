import { useState } from "react";
import {
  Outlet,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import PageHero from "../../components/PageHero";
import { Helmet } from "react-helmet-async";
import { slugToTitle } from "../../util/util";

const WaysToGive = () => {
  const { company, errorsMessageDescription } = useOutletContext();
  const [monerisResponse, setMonerisResponse] = useState(null);
  const localData = JSON.parse(localStorage.getItem("pcfFormData"));
  const approvedData = JSON.parse(localStorage.getItem("pcfApprovedData"));
  const { pathname } = useLocation();
  // const params = useParams()

  const contextData = {
    company,
    monerisResponse,
    setMonerisResponse,
    localData,
    errorsMessageDescription,
    approvedData,
  };

  // console.log(pathname.split("/"))
  // console.log();

  return (
    <>
      <Helmet>
        <title>{slugToTitle(pathname)}</title>
      </Helmet>
      <PageHero imgSrc="/assets/img/ways-to-give/hero.jpeg" />
      <Outlet context={contextData} />
    </>
  );
};

export default WaysToGive;
