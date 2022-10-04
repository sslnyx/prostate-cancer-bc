import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import DonateForm from "./DonateForm";

const DonateOnline = () => {
  const [step, setStep] = useState(0);
  const [donationType, setDonationType] = useState(null);
  const steps = [1, 2, 3];
  // const [monerisResponse, setMonerisResponse] = useState(null)

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
                  {steps.map((val, i) => (
                    <div
                      key={i}
                      className={`h-[20px] w-[50px] mx-1 ${
                        step >= i ? "bg-darkBlue" : "bg-blue"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <div className="mb-10"></div>
          <div className="flex justify-end mb-3">
            <span>*required</span>
          </div>

          <div className="flex items-center">
            <span>Donation Type*</span>
            <div className="flex-1"></div>
            <div className="flex -mx-3">
              <span className="px-3">
                <PrimaryBtn
                  className={`bg-transparent hover:bg-opacity-50 hover:bg-gray-300 ${
                    donationType === "purchase"
                      ? "!bg-darkBlue !text-white border-darkBlue"
                      : "text-blue border-blue"
                  }`}
                  onClick={() => setDonationType("purchase")}
                >
                  Single Donation
                </PrimaryBtn>
              </span>
              <span className="px-3">
                <PrimaryBtn
                  className={`bg-transparent hover:bg-opacity-50 hover:bg-gray-300 ${
                    donationType === "preauth"
                      ? "!bg-darkBlue !text-white border-darkBlue"
                      : "text-blue border-blue"
                  }`}
                  onClick={() => setDonationType("preauth")}
                >
                  Monthly Giving Program
                </PrimaryBtn>
              </span>
            </div>
          </div>
        </div>
      </section>

      {donationType && (
        <div className="mb-10">
          <div className="container !max-w-[1000px]">
            {donationType === "preauth" && (
              <p className="mx-auto max-w-[750px] py-10">
                With your monthly gift you will help provide an ongoing source
                of revenue for Prostate Cancer Foundation BC. By not processing
                one-time donations, you will also help in the reduction of
                administrative and postage costs. Monthly giving is an
                affordable way to contribute all year round and you may cancel
                your enrolment with 30 days notice at any time by emailing the
                Foundation at{" "}
                <a href="" className="underline text-blue">
                  info@prostatecancerbc.ca
                </a>
                .
              </p>
            )}
            <DonateForm donationType={donationType} {...{ setStep, step }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateOnline;
