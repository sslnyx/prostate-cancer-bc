import PostTitle from "../../../components/post-section/PostTitle";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const Incontinence = () => {
  const list1 = [
    "Collection devices, diapers, pads, leakproof briefs",
    "Artificial sphincter",
    "Medications",
    "Clamps and cuffs",
  ];
  return (
    <>
    <PageTitle title="Incontinence"/>
      {/* <PostTitle>Incontinence</PostTitle> */}

      <div className="container">
        <section>
          <div className="max-w-[1000px] mx-auto">
            <div className="max-w-[700px] mx-auto">
              <p>
                Incontinence is a common, often frustrating, side effect of
                invasive prostate cancer treatments. It’s caused by the removal
                or weakening of prostate tissue which normally plays an
                important role in a man’s urinary control mechanism. For most
                men, incontinence is temporary; there may be slight dribbling or
                leakage when coughing, sneezing, or laughing for up to a year
                following treatment. For a very small percentage of men,
                incontinence is more difficult to treat.
              </p>
            </div>

            <div className="mb-10"></div>

            <YoutubeIframe videoId="NByrv3qgirM" />
            <div className="mb-10"></div>

            <div className="max-w-[700px] mx-auto">
              <p>Luckily, there are ways you can manage it:</p>
              <ul className="list-disc pl-4">
                <li className="mb-3">
                  Kegel exercises for strengthening your urinary sphincter
                  muscles -{" "}
                  <Link to="/get-support/reef-knot-kits">
                    Get a copy of Your Prostate Cancer Exercise Guide
                  </Link>{" "}
                  for a guide to Kegels
                </li>
                {list1.map((item, i) => (
                  <li key={i} className="mb-3 last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10"></div>

            <YoutubeIframe videoId="IKdoZu830R4" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Incontinence;
