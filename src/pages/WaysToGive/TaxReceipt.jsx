import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import TaxReceiptBill from "./TaxReceiptBill";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const TaxReceipt = () => {
  const { approvedData, company } = useOutletContext();
  const navigate = useNavigate();

  const bill = useRef();
  const handlePrint = useReactToPrint({
    content: () => bill.current,
  });

  useEffect(() => {
    const approved = parseInt(approvedData?.ResponseCode) <= 29;
    if (!approved) navigate("/page404");
  }, []);

  return (
    <section>
      <div className="container">
        <div className="max-w-[650px] mx-auto">
          <div className="mb-10">
            <div className="flex justify-between">
              <h1 className="mb-3">Online Donations</h1>

              <PrimaryBtn onClick={handlePrint} className="btn-main">
                Print
              </PrimaryBtn>
            </div>

            <p>
              Please find below your official tax receipt for income tax
              purposes. Please kindly print your tax receipt for your records.
            </p>
          </div>
        </div>

        <div
          className="bill-print origin-top-left scale-50 md:scale-100"
          ref={bill}
        >
          <div className="border-black border-2 w-[650px] mx-auto">
            <TaxReceiptBill recieptData={approvedData} companyInfo={company} />
            <div className="px-5">
              <div className=" border-dashed border border-black"></div>
            </div>
            <TaxReceiptBill
              copy
              recieptData={approvedData}
              companyInfo={company}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxReceipt;
