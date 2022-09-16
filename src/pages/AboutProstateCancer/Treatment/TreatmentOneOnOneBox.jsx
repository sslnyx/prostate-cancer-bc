import { Link } from "react-router-dom";

const TreatmentOneOnOneBox = () => {
  return (
    <div className="max-w-[700px] p-10 bg-blue mx-auto">
      <p className="italic">
        If you would like to talk to someone one on one who has undergone one of
        these treatments, we would be happy to pair you with a peer who can tell
        you more about their experience.{" "}
        <Link to="/get-support/peer-support" className="!text-white">
          Click here for a One on One.
        </Link>
      </p>
    </div>
  );
};

export default TreatmentOneOnOneBox;
