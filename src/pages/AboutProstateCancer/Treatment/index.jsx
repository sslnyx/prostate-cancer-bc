import SectionTitle from "../../../components/SectionTitle";
import PageTitle from "../../../components/PageTitle";
import { Outlet } from "react-router-dom";

const Treatment = () => {
  return (
    <div>
      <PageTitle title="Treatment" className="border-none" />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Treatment;
