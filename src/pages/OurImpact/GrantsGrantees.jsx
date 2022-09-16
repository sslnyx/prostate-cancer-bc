import { useOutletContext } from "react-router-dom";
import GranteeCard from "./GranteeCard";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";

const GrantsGrantees = () => {
  const {
    grantYears: { nodes },
  } = useOutletContext();

  nodes.sort((a, b) => b.name - a.name);

  return (
    <>
      {nodes.map(({ grantees, name, id, description }) => (
        <div className="mb-5 last:mb-0" key={id}>
          <div className="text-center">
            <h2 className="text-blue">{name}</h2>
            <p>{description}</p>
            <Row className="-mx-3">
              {grantees?.nodes.map((grantee) => (
                <Col gap={3} w={4}>
                  <GranteeCard {...grantee} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}

      <div className="text-center mb-10">
        <h2 className="text-blue">2003 - 2017</h2>
        <p>
          Please click{" "}
          <a className="text-blue underline" href="/assets/pdfs/PCFBC_GrantsList.pdf" target="_blank">
            here
          </a>{" "}
          to learn more about past grants awarded.
        </p>
      </div>
    </>
  );
};

export default GrantsGrantees;
