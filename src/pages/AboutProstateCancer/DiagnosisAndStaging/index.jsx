import { Outlet } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
const DiagnosisAndStaging = () => {
  return (
    <div>
      <section className="border-none">
        <div className="container">
          <SectionTitle
            p1="Diagnosis"
            p2="And Staging"
            className="title-light"
          />
        </div>
      </section>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default DiagnosisAndStaging;
