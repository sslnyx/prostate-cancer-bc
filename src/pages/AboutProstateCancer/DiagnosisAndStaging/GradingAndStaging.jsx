import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import GradingChart from "./GradingChart";
import ExpendableContent from "../../../components/post-section/ExpendableContent";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import PageTitle from "../../../components/PageTitle";

const GradingAndStaging = () => {
  return (
    <div>

      <PageTitle p1="Grading" p2="and Staging" className="title-light" />
      <div className="container">
        <section>
          {/* <PostTitle>
          <span className="text-blue">Grading</span> and{" "}
          <span className="text-blue">Staging</span>
        </PostTitle> */}

          <img
            className="mx-auto"
            src="/assets/img/about-prostate-cancer/grading/grading.jpeg"
          />

          <div className="mb-10"></div>
          <div className="max-w-[810px] mx-auto">
            <p>
              Prostate cancer presents differently in different patients. Using
              standard terms for grading and staging helps you and your
              healthcare professionals understand the state of their prostate
              cancer and their risk for further progression of the disease
              and/or metastasis.
            </p>

            <p>
              <i>Grade</i> refers to the aggressiveness of the cancer and is
              scored from 1 to 5 on the Gleason scale. A pathologist will assign
              two grades to the tissue samples they receive. This ensures that a
              more accurate overall grade, as cancer is rarely equally spread
              out through the gland. The two numbers are then added together to
              give a total ‘Gleason score.’
            </p>

            <p>
              <u>Gleason scores:</u> The order in which a Gleason score is read
              is important. The first number is the more common grade in the
              sample and the second number is the next most common grade. That
              means that - despite both being Gleason 7 - a Gleason 3+4 patient
              would have a less aggressive cancer than a Gleason 4+3 patient and
              may require different courses of treatment. Generally, the higher
              the Gleason score, the more aggressive the cancer.
            </p>

            <p>
              <i>Stage</i> refers to the degree with which the cancer has
              spread. Early stage cancer is confined to the prostate
              (localized), while intermediate cancer has begun to spread beyond
              the prostate. Advanced stage prostate cancer has metastasized and
              spread into other tissues and bones. Very advanced cancer becomes
              generalized throughout the body.
            </p>

            <p>
              TNM (Tumour Node Metastasis) is the most common system used to
              stage prostate cancer in Canada. The ‘T’ refers to the size of the
              tumour in the prostate, the ‘N’ refers to the degree of lymph node
              involvement, and the ‘M’ refers to whether or not the cancer has
              spread far from the tumour.
            </p>
          </div>
        </section>

        <TitleAndContent
          title="Resources for<br /> grading and staging"
          className="max-w-[1000px]"
        >
          <YoutubeIframe videoId="ydZnp1tRknE" />
          <div className="mb-20"></div>

          <p className="mb-10">
            <span className="font-bold underline">
              Putting numbers in perspective:
            </span>{" "}
            You can <i>roughly</i> categorize your cancer with the below chart.
          </p>

          <GradingChart />

          <div className="mb-10"></div>
          <ExpendableContent title="Expand To Know About Each Category">
            <strong className="underline">Gleason grades:</strong>
            <ul>
              <li>
                Grade 1: The tissue is still quite similar in appearance to
                healthy tissue; this is the least aggressive grade
              </li>
              <li>
                Grade 2: The tissue is a little different from normal tissue
              </li>
              <li>
                Grade 3: The tissue is moderately different from normal tissue
              </li>
              <li>
                Grade 4: the tissue is abnormally shaped and quite irregular
              </li>
              <li>
                Grade 5: the tissue is very different from normal tissue; this
                is the most aggressive grade
              </li>
            </ul>

            <div className="mb-10"></div>

            <strong className="underline">TNM stages:</strong>

            <ul>
              <li>
                T: (<i>size of the tumour in the prostate</i>)
              </li>
              <li>T0: There is no evidence of tumour in the prostate</li>

              <li>
                T1: The prostate seems normal and the tumour was discovered due
                to a high PSA measurement
              </li>
              <li>
                T2: the tumour is palpable and confined within the prostate
              </li>
              <li>
                T3: The tumour extends beyond the prostate (affecting the
                capsul, that is, the tissue surrounding the gland, and/or the
                seminal vesicles)
              </li>
              <li>
                T4: The tumour has invaded neighbouring tissues (bladder neck,
                external sphincter, rectum, etc.)
              </li>
            </ul>

            <div className="mb-10"></div>

            <strong className="underline">
              N (degree of lymph node involvement):
            </strong>

            <ul>
              <li>N0: There is no evidence of a tumour in the lymph nodes</li>
              <li>N+: One or more lymph nodes are involved</li>
            </ul>

            <div className="mb-10"></div>

            <strong className="underline">
              M (presence or absence of further metastases):
            </strong>

            <ul>
              <li>M0: There is no metastasis beyond the lymph nodes</li>
              <li>M1: There is bone or distant metastasis</li>
            </ul>
          </ExpendableContent>
        </TitleAndContent>
      </div>
    </div>
  );
};

export default GradingAndStaging;
