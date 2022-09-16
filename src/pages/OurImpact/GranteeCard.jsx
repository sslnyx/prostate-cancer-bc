// import Col from "../../components/rows-cols/Col";
// import ArrowBtn from "../../components/bttons/ArrowBtn";

const GranteeCard = ({ granteeBio, title }) => {
  const { description, portfolioPicture } = granteeBio;
  //   console.log(portfolioPicture);
  return (
    <div className="outer-square w-full">
      <div className="inner relative bg-blue">
        {portfolioPicture?.sourceUrl && (
          <img
            className={`absolute top-0 left-0 w-full h-full ${
              portfolioPicture.mediaDetails.height > 250
                ? "object-cover"
                : "object-contain px-10"
            }`}
            src={portfolioPicture.sourceUrl}
          />
        )}

        <div className="w-full h-[30%] bottom-0 absolute bg-gradient-to-t from-darkBlue to-transparent"></div>
        <div className="text-white p-3 absolute bottom-0 w-full text-center z-10">
          <h3 className="text-2xl">{title}</h3>
          <p className="font-bold">{granteeBio.title}</p>
        </div>

        <div className="absolute z-20 w-full h-full bg-darkBlue flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-all duration-500 p-[22px]">
          <p>{description}</p>
        </div>


      </div>
    </div>
  );
};

export default GranteeCard;
