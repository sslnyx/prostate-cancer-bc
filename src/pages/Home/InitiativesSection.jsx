import ArrowBtn from "../../components/bttons/ArrowBtn";

const InitiativesSection = ({ title, img, description, link }) => {
  return (
    <div className="md:py-[50px] initiative-section">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="py-10 md:p-[50px] text-block basis-full md:basis-5/12 flex justify-center">
          <div>
            <h3 className="mb-5 font-sans font-bold">{title}</h3>
            <p className="max-w-[350px]">{description}</p>

            <div className="flex justify-end">
              <ArrowBtn href={link} color="fill-blue" className="text-blue">
                LEARN MORE
              </ArrowBtn>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-7/12 img-block">
          <img className="w-full" src={`/assets/img/home/initiatives/${img}`} />
        </div>
      </div>
    </div>
  );
};

export default InitiativesSection;
