import { useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const PaymentError = () => {
  const {
    errorsMessageDescription,
    approvedData,
  } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("pcfApprovedData");
    console.log(data)
    if (!data || !approvedData?.ResponseCode) return navigate("/page404");
  }, []);

  return (
    <section>
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="mb-10">Payment Error</h1>
        <p>
          Unable to process donation transaction. Please check all required
          fields and try again.
        </p>
        <div className="mb-10"></div>
        <div className="mb-5">
          <div className="font-bold">Error Code: </div>
          <span>{approvedData?.ResponseCode}</span>
          <br />
          <span
            dangerouslySetInnerHTML={{
              __html: errorsMessageDescription[approvedData?.ResponseCode],
            }}
          />
        </div>

        <div className="mb-5">
          <div className="font-bold">Terminal Message: </div>
          <span>
            {approvedData?.Message}
            {/* {Message?.split(" ")
              .slice(0, 1)
              .map((msg,i) => (
                <p key={i}>{msg}</p>
              ))} */}
          </span>
        </div>

        <PrimaryBtn href="/ways-to-give/donate-online" className="btn-main">
          Back to Online Donations
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default PaymentError;
