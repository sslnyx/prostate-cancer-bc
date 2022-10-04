import { forwardRef } from "react";

const DonateInput = forwardRef((props, ref) => {
  // console.log(props)
  return (
    <input className="border border-black w-full px-3" {...props} ref={ref} />
  );
});

export default DonateInput;
