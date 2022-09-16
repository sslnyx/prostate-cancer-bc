const QuoteBox = ({ children, bg }) => {
  return (
    <div
      className={`relative max-w-[800px] py-20 px-10 md:px-[100px] text-2xl mb-10 ${
        bg ? "bg-blue text-white" : ""
      }`}
    >
      <img
        className="absolute -right-[35px] -bottom-[35px]"
        src="/assets/img/icons/right-quote.svg"
        alt=""
      />
      <img
        className="absolute -left-[35px] -top-[35px]"
        src="/assets/img/icons/left-quote.svg"
        alt=""
      />
      {children}
    </div>
  );
};

export default QuoteBox;
