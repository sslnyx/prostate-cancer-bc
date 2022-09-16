import { Outlet } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const WhatIsProstateCancer = () => {
  return (
    <>
      <section className="border-none">
        <div className="container">
          <SectionTitle
            p1="What is"
            p2="Prostate Cancer?"
            className="title-light"
          />
        </div>
      </section>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default WhatIsProstateCancer;
