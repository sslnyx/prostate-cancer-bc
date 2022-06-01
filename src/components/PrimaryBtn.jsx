import classNames from "classnames";

const PrimaryBtn = ({ children, className }) => {
  return (
    <button
      className={`${className} mx-1 uppercase last:mr-0 rounded-[5px] border-2 px-[1rem] py-[0.1rem] font-bold text-white hover:bg-white`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
