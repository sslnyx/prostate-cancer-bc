// import { Link } from "react-router-dom";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const SubmissionError = () => {
  return (
    <section>
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="mb-10">Submission Error</h1>

        <PrimaryBtn href="/" className="btn-main">
          Back to home
        </PrimaryBtn>
      </div>
    </section>
  );
};

export default SubmissionError;
