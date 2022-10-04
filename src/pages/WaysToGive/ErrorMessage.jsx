import React from "react";

const ErrorMessage = ({ error }) => {
    // console.log(error)
  return (
    <>
      {error && (
        <small className="absolute -bottom-[20px] left-0 text-red-400 pl-3">
          {error}
        </small>
      )}
    </>
  );
};

export default ErrorMessage;
