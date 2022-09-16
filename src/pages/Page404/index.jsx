import { Link } from "react-router-dom";
import ArrowBtn from "../../components/bttons/ArrowBtn";

const Page404 = () => {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center py-10">
      <div className="flex flex-col items-center py-10 px-[22px]">
        <h1 className="mb-10">Sorry, this page can't be found.</h1>
        <ArrowBtn href="/" color="fill-darkBlue">Back to home</ArrowBtn>
      </div>
    </div>
  );
};

export default Page404;
