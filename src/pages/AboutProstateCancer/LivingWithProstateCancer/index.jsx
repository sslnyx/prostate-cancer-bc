import PageTitle from "../../../components/PageTitle";
import { Outlet } from "react-router-dom";
// import PostTitle from "../../../components/post-section/PostTitle";

const LivingWithProstateCancer = () => {
  return (
    <div>
      <section className="border-none">
        <div className="container">
          <h2>
            <span className="text-8xl text-blue">Living</span>
            <br />
            <span className="text-7xl">with prostate cancer</span>
          </h2>
        </div>
      </section>

      {/* <PageTitle p1="" p2="" className="border-none title-light" /> */}

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default LivingWithProstateCancer;
