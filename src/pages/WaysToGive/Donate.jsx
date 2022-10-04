import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import { Link, useOutletContext } from "react-router-dom";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const Donate = () => {
  const {
    contact,
    address3: { street, city, province, postalCode, country },
    name,
  } = useOutletContext().company;
  // console.log(data)

  return (
    <div>
      <PageTitle
        title="Donations"
        description="Every dollar makes a difference in the lives of the 1 in 8 men who will be diagnosed with prostate cancer in Canada. Tax receipts are provided for all donations $20 and over."
      />

      <section>
        <div className="container">
          <h2 className="text-center text-5xl">
            <span className="text-blue">Ways to</span> <br className="block md:hidden" /> Support us
          </h2>
          <div className="mb-10"></div>

          <div className="border-b-2 border-blue pb-10 mb-10">
            <Row>
              <Col w={6}>
                <Link to="/ways-to-give/donate-online" className="w-full mb-10 md:mb-0">
                  <h2 className="w-full max-w-[500px] bg-blue p-10 ">
                    <span className="text-darkBlue">DONATE</span>
                    <br /> <span className="text-white text-5xl">Online</span>
                  </h2>
                </Link>
              </Col>
              <Col w={6} className="flex !justify-start md:!justify-center">
                <div className="w-[225px] px-10 md:px-0">
                  <p>Fill out our online form:</p>
                  <PrimaryBtn
                    className="btn-main"
                    href="/ways-to-give/donate-online"
                  >
                    CLICK HERE
                  </PrimaryBtn>
                </div>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col w={6} className="mb-10 md:mb-0">
                <div className="w-full">
                  <h2 className="w-full max-w-[500px] bg-blue p-10">
                    <span className="text-darkBlue">DONATE</span>
                    <br /> <span className="text-white text-5xl">BY MAIL</span>
                  </h2>
                </div>
              </Col>
              <Col w={6}  className="flex !justify-start md:!justify-center">
                <div className="px-10 md:px-0">
                  <p>Please mail your cheque to:</p>
                  <p>
                    <span className="font-bold">{name}</span>
                    <br />
                    <span>{street}</span>
                    <br />
                    <span>{`${city}, ${province} ${country} ${postalCode}`}</span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-5xl text-center mb-10">
            Tax deductible contributions <br />
            <span className="text-blue">can be made to</span>
          </h2>

          <div className="text-center">
            <p>{name}</p>
            <span>{street}</span>
            <br />
            <span>{`${city}, ${province} ${country} ${postalCode}`}</span>
            <br />
            <span>T:</span> <span>{contact[0].value}</span>
            {/* <a href={`tel:${contact[0].value}`}>
              <span>{contact[0].value}</span>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
