import { Link } from "react-router-dom";
import ArrowBtn from "../../components/bttons/ArrowBtn";
import { Helmet } from "react-helmet-async";

const Page404 = () => {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center py-10">
      <Helmet>
        <title>Page 404</title>
      </Helmet>
      <div className="flex flex-col items-center py-10 px-[22px]">
        <h1 className="mb-10">Sorry, this page can't be found.</h1>
        <ArrowBtn href="/" color="fill-darkBlue">
          Back to home
        </ArrowBtn>
      </div>
    </div>
  );
};

export default Page404;
