import PostTitle from "../../../components/post-section/PostTitle";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import PageTitle from "../../../components/PageTitle";

const Sleep = () => {
  return (
    <>
      {/* <PostTitle>Sleep</PostTitle> */}

      <PageTitle title="sleep" />
      <div className="container">
        <section>
          <div className="max-w-[1000px] mx-auto">
            <p className="max-w-[700px] mx-auto">
              Sleeping well is vital for everyone, but even more so for cancer
              patients. And unfortunately, some treatments can cause sleep
              disturbances and reduce the quality of a patient’s sleep. Learn
              more about the importance of sleeping well with, and beyond
              cancer.
            </p>
            <div className="mb-10"></div>

            <YoutubeIframe videoId="N280zbmClGk" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sleep;
