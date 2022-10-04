// import React from "react";

const ThankYouModal = ({ show, setShow, children }) => {
  const closeHanlder = () => {
    setShow(false);
  };
  return (
    <div
      className={`modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto block ${
        show ? "pointer-events-auto show" : "pointer-events-none"
      }`}
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={closeHanlder}
        className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-30"
      ></div>

      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div
          className={`modal-content border-none shadow-lg relative flex flex-col w-full bg-white bg-clip-padding rounded-md outline-none text-current ${
            show ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="modal-body relative p-5 pb-10">
            <div className="flex justify-end">
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeHanlder}
              ></button>
            </div>
            <h3 className="text-center !text-darkBlue">Thank you</h3>
            <div className="mb-3"></div>
            {children ? (
              children
            ) : (
              <p className="text-center !text-darkBlue">
                Thank you for your submission
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
