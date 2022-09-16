import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const DonateOnline = () => {
  const [step, setStep] = useState(0);

  const steps = [1, 2, 3];

  return (
    <div>
      <PageTitle p1="Online" p2="Donations" className="title-light">
        <div>
          <p>
            Your donation will make a real difference in providing prostate
            cancer support and awareness across Canada. Kindly fill out the form
            below and select from the options provided.
          </p>
          <p>
            For donation assistance, please call{" "}
            <a href="tel:604-574-4012" className="underline text-blue">
              604-574-4012
            </a>{" "}
            or reach out to Shelley at{" "}
            <a
              href="mailto:shelley@prostatecancerbc.ca"
              className="underline text-blue"
            >
              shelley@prostatecancerbc.ca
            </a>
          </p>
        </div>
      </PageTitle>

      <section>
        <div className="container !max-w-[1000px]">
          <Row>
            <Col w={6} className="md:justify-start">
              <h2>Gift Information</h2>
            </Col>
            <Col w={6} className="md:justify-end">
              <div className="flex">
                <span className="mr-3">Step {steps[step]} of 3</span>{" "}
                <div className="flex">
                  {steps.map(() => (
                    <div className="h-[20px] w-[50px] bg-blue mx-1"></div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <div className="mb-10"></div>
          <div className="flex items-center">
            <span>Donation Type*</span>
            <div className="flex-1"></div>
            <div className="flex -mx-3">
              <span className="px-3">
                <PrimaryBtn className="btn-main">Single Donation</PrimaryBtn>
              </span>
              <span className="px-3">
                <PrimaryBtn className="btn-main">
                  Monthly Giving Program
                </PrimaryBtn>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-10"></div>
    </div>
  );
};

export default DonateOnline;
