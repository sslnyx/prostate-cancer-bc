// import React from 'react'
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const { monerisResponse, approvedData } = useOutletContext();

  //   const { TransAmount } = approvedData;

  return (
    <section className="link-blue">
      <div className="container !max-w-[700px]">
        <h1 className="text-center mb-10">Thank You</h1>

        <p>
          Thank you for your{" "}
          {approvedData?.donation_type === "Monthly" && "monthly"} gift of{" "}
          <u>${approvedData?.donation_amount}</u> to Prostate Cancer Foundation
          BC. Your thoughtful contribution will be used towards improving the
          knowledge, prevention and treatment of Prostate Cancer in B.C. For
          your records, your donation number for this transaction is{" "}
          <u>{approvedData?.ReferenceNum}</u>, and the authorization number is{" "}
          <u>{approvedData?.AuthCode}</u>.{" "}
          {approvedData?.donation_type === "Monthly" &&
            "At the 15th of each month, your credit card will be processed accordingly."}
        </p>

        <p>
          {approvedData?.donation_type === "Monthly" ? (
            <span>
              To help us reduce administration and postage costs and be more
              environmentally-friendly, your official receipt for income tax
              purposes will be sent to you by <u>February 28th</u> of
              the following year.
            </span>
          ) : (
            <span>
              For your official receipt for income tax purposes, please{" "}
              <Link to="/ways-to-give/tax-receipt">click here</Link>. Please
              kindly print your tax receipt for your records.
            </span>
          )}
          If you have any problems, please contact Prostate Cancer Foundation BC
          at <a href="tel:+604-574-4012">604-574-4012</a> or{" "}
          <a href="mailto:info@prostatecancerbc.ca">info@prostatecancerbc.ca</a>
          .
        </p>

        <p>Once again, thank you for your support to make a difference.</p>
      </div>
    </section>
  );
};

export default ThankYou;
