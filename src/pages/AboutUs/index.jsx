import { useEffect, useState } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";

const AboutUs = () => {
  const {
    members: { edges },
    company,
  } = useOutletContext();

  const { pathname } = useLocation();

  // console.log(pathname);

  const [contextData, setContextData] = useState(null);

  useEffect(() => {
    const obj = {};
    edges.forEach((el) => {
      // console.log(el);
      let cat = "";

      let { id, parent, name } = el.node.memberTypes.nodes[0];

      if (parent?.node.name) {
        cat = parent.node.id;
      } else {
        cat = id;
      }

      if (name === "Director") cat = id;

      if (name === "Medical Advisor") cat = id;

      !obj[cat] ? (obj[cat] = []) : "";

      if (obj[cat]) {
        obj[cat].push(el.node);
      }
    });

    const data = {
      company,
      memberByCats: obj,
    };

    setContextData(data);
  }, []);

  return (
    <>
      <PageHero imgSrc={`/assets/img/${pathname}/hero.jpeg`} />
      {contextData ? <Outlet context={contextData} /> : ""}
    </>
  );
};

export default AboutUs;
