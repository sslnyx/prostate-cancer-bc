// import React from "react";
import { dateFormat } from "../../util/date.format";

const TaxReceiptBill = ({ recieptData, companyInfo, copy }) => {

  const {
    name,
    address3: { city, country, postalCode, province, street },
    contact,
    charityNumber,
  } = companyInfo;

  return (
    <div className="min-w-[650px] w-[650px] mx-auto p-[22px] text-[12px] leading-[16px]">
      {copy ? (
        <p className="m-0 text-2xl pl-[70px]">DUPLICATE COPY</p>
      ) : (
        <h2>TAX Receipt</h2>
      )}

      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="mb-0 text-2xl">{name}</p>
          <p>
            {street}, {city}, {province} {country} {postalCode}{" "}
            {contact.find(({ title }) => title === "T").value}
          </p>
        </div>

        <div>
          <img
            className="w-[60px]"
            src="/assets/img/logos/pcf-logo-grahpic.png"
          />
        </div>

        <div>
          <p className="text-right">
            <span className="font-bold"></span>
            Receipt Number
            <br />
            {recieptData?.id}
          </p>
        </div>
      </div>

      <div>
        <p className="text-right">
          <span>Date: </span>
          <span>{dateFormat(recieptData?.TransDateTime, "mmmm d, yyyy")}</span>
        </p>

        <p className="text-right">
          We acknowledge with gratitude your contribution of:
          <br />${recieptData?.donation_amount}
        </p>
      </div>

      <div className="flex items-center">
        <div className="mr-5 font-bold">
          D <br />
          O<br />
          N<br />
          O <br /> R
        </div>

        <div>
          <p>
            {recieptData?.b_fname + " " + recieptData?.b_lname}
            <br />
            {recieptData?.b_add}
            <br />
            {recieptData?.b_city}, {recieptData?.b_prov}
            <br />
            {recieptData?.b_country} {recieptData?.b_pcode}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="text-center px-3">
          <p>
            OFFICIAL RECEIPT FOR INCOME TAX PURPOSES <br />
            Charitable Business #: {charityNumber}
          </p>
        </div>
        <div className="text-center px-3 relative">
          <img
            className="absolute -top-[60px] left-[50%] -translate-x-[50%]"
            src="/assets/img/icons/signature.gif"
          />
          <p className="relative z-10 border-t-2 border-black pt-3">
            AUTHORIZED REPRESENTATIVE <br />
            <i>“Dedicated to finding a cure for prostate cancer.”</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxReceiptBill;
