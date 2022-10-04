import PostTitle from "../../../components/post-section/PostTitle";
import PageTitle from "../../../components/PageTitle";

const Statistics = () => {
  return (
    <div>
      <PageTitle title="Statistics" className="title-light" />

      {/* <PostTitle>
        <span className="text-blue">Statistics</span>
      </PostTitle> */}

      <div className="container">
        <div className="py-20 px-0 flex justify-center">
          <img src="/assets/img/about-prostate-cancer/statistics/stats.jpeg" />
        </div>

        <ul className="max-w-[750px] mx-auto mb-20 list-disc pl-4">
          <li className="mb-5 font-bold">
            Prostate cancer is the #1 most diagnosed and most prevalent cancer in
            Canadian men, accounting for 1 in 5, or 20%, of new cancer cases in
            men.
          </li>
          <li className="mb-5">
            <span>
              1 in 8 Canadian men are expected to be diagnosed with prostate
              cancer in their lifetime.
            </span>{" "}
            That will be the equivalent of approximately 24,600 men diagnosed in
            2022 alone - with many thousands more living with their prostate
            cancer.
          </li>
          <li className="mb-5">
            Most prostate cancer cases are in men over the age of 50. The older
            you are, the more likely you are to be diagnosed with prostate
            cancer. Though more rare, men at increased risk of prostate cancer
            can be diagnosed younger than 50.
          </li>
          <li className="mb-5">
            Prostate cancer is the third leading cause of cancer death in males,
            following only lung and colorectal cancer. This accounts for 10% of
            all cancer deaths in men. 1 in 29, or 4%, of males are expected to
            die from prostate cancer.
          </li>
          <li className="mb-5 font-bold">
            When prostate cancer is diagnosed early (before it spreads and is
            contained in the prostate), it is nearly 100% treatable. More than
            99% of men diagnosed early with prostate cancer will live at least 5
            years.
          </li>

          <div>
            <p className="text-xs">
              Reference: <br />
              Canadian Cancer Statistics Advisory Committee. Canadian Cancer
              Statistics 2022. Canadian Cancer Society; 2022:{" "}
              <a
                href="https://cancer.ca/en/research/cancer-statistics"
                target="_blank"
              >
                https://cancer.ca/en/research/cancer-statistics
              </a>
              .
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
