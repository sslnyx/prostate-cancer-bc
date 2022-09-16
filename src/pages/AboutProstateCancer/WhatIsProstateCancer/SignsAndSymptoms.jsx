import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import { Link } from "react-router-dom";

const SignsAndSymptoms = () => {
  return (
    <div>
      <div className="mb-10"></div>
      <PostTitle>
        <span className="text-blue">Signs </span>
        and
        <span className="text-blue"> Symptoms</span>
      </PostTitle>
      <div className="mb-10"></div>
      <div className="max-w-[600px] mx-auto">
        <p>
          Prostate cancer is generally a{" "}
          <span className="font-bold">symptomless</span> (asymptomatic) disease
          and can grow for many years without a patient being aware of its
          presence.
        </p>
      </div>

      <TitleAndContent title="Signs">
        <div>
          <p>
            <span className="font-bold">Signs </span>
            of prostate cancer are those found by a doctor or medical
            professional, such as:
          </p>

          <ul className="list-disc pl-4">
            <li>
              Lumps or hardening on the prostate found during a{" "}
              <Link to="/about-prostate-cancer/diagnosis-and-staging/the-psa-test-and-the-dre">
                DRE
              </Link>
            </li>

            <li>
              Abnormal prostate specific antigen (PSA) levels found on a{" "}
              <Link to="/about-prostate-cancer/diagnosis-and-staging/the-psa-test-and-the-dre">
                PSA blood test
              </Link>
            </li>

            <li>
              Cancerous cells found in prostate tissue following a{" "}
              <Link to="/about-prostate-cancer/diagnosis-and-staging/biopsy-and-imaging">
                biopsy
              </Link>
            </li>
          </ul>
        </div>
      </TitleAndContent>

      <TitleAndContent title="Symptoms">
        <div>
          <p>
            <span className="font-bold">Symptoms</span> that
            <i> may </i>
            occur, however, are:
          </p>

          <ul className="list-disc pl-4">
            <li>
              Changes in urination: increased frequency, reduced flow, a feeling
              of difficulty to empty the bladder, or the presence of blood in
              the urine (these are more often associated with BPH than prostate
              cancer)
            </li>
            <li>
              Changes in sexual function: painful or decreased volume of
              ejaculation, difficulty achieving an erection
            </li>

            <li>
              In advanced prostate cancer: fatigue, lower extremity swelling,
              numbness or tingling, generally feeling unwell, loss of weight
            </li>
          </ul>
        </div>
      </TitleAndContent>
    </div>
  );
};

export default SignsAndSymptoms;
