import { useOutletContext } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import InitiativesSection from "./InitiativesSection";

const OurInitiatives = () => {
  const {
    static_pages: { initiatives },
  } = useOutletContext();
  return (
    <div>
      <div className="container">
        <SectionTitle p1="Our key" p2="INITIATIVES" className="title-light" />
        <div className="mb-10 md:mb-0"></div>
        {initiatives.map((el, i) => (
          <InitiativesSection key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

export default OurInitiatives;
