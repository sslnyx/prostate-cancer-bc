import ImageAndText from "../../../components/post-section/ImageAndText";
import PostTitle from "../../../components/post-section/PostTitle";
import PageTitle from "../../../components/PageTitle";

const WhatIsCancer = () => {
  return (
    <>
      <PageTitle p1="What is" p2="Cancer" className="title-light" />
      {/* <PostTitle>
        What is <span className="text-blue">Cancer</span>?
      </PostTitle> */}

      <div className="container">
        <ImageAndText className="max-w-[1000px] mx-auto" imgSrc="/assets/img/about-prostate-cancer/what-is-cancer/cancer-1.png">
          <div>
            {/* <div className="mb-10"></div> */}

            <p>
              Cancer is a disease in which cells in the body grow out of
              control. When cancer starts in the prostate, it’s called prostate
              cancer. Prostate cancer can be either localized or advanced.
            </p>
            <p>
              Localized prostate cancer refers to cancer that has not grown
              beyond the prostate. It generally has no symptoms (asymptomatic)
              and does not often end up spreading beyond the prostate.
            </p>
            <p>
              Advanced prostate cancer refers to cancer that has spread
              (metastasized) beyond the prostate including into surrounding
              tissues, bones, and/or lymph nodes. Advanced cancer can be
              high-risk, complex, and castrate-resistant. For more information
              and to receive specialized support for advanced cancer, please
              visit our advanced prostate cancer initiative:{" "}
              <a
                target="_blank"
                className="underline text-blue"
                href="https://www.advancedprostatecancer.ca/"
              >
                advancedprostatecancer.ca
              </a>
            </p>
          </div>
        </ImageAndText>
      </div>
    </>
  );
};

export default WhatIsCancer;
