import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import PageTitle from "../../../components/PageTitle";

const BiopsyAndImaging = () => {
  return (
    <>
      <PageTitle p1="Biopsy" p2="and Imaging" className="title-light" />

      <div className="container">
        <section>
          {/* <PostTitle>
          <span>Biopsy</span> and <span>Imaging</span>
        </PostTitle> */}

          {/* <div className="mb-10"></div> */}

          <p className="max-w-[800px] mx-auto">
            If a DRE or PSA test indicates the possibility of prostate cancer, a
            biopsy and/or ultrasound is completed to confirm the presence of
            prostate cancer.
          </p>
        </section>
        <TitleAndContent
          className="max-w-[800px]"
          title="Trans-Rectal Ultrasound (TRUS) Guided Biopsy"
        >
          <p>
            At the time of biopsy, an ultrasound probe is inserted into the
            rectum to visualize the prostate (though some physicians may
            complete a finger-guided biopsy). A biopsy needle is then inserted
            next to the probe to remove 6-12 small pieces of tissue (often
            referred to as ‘cores’) for testing. A pathologist will then look at
            the samples to determine if any cancerous cells are present. They
            will determine the grade, score and stage of your prostate cancer.
          </p>

          <p>
            The procedure lasts less than 10 minutes and is done under local
            anesthetic. Trans-rectal biopsies are relatively pain-free for most
            patients, but can be quite uncomfortable for some.
          </p>
          <p>
            In rare cases, bacteria can travel from the rectum and enter the
            prostate gland causing serious bacterial infections and sepsis which
            requires treatment with antibiotics. About 1-4% of patients who
            undergo the procedure are affected.
          </p>
        </TitleAndContent>

        <TitleAndContent
          className="max-w-[800px]"
          title="Trans-Perineal Biopsy"
        >
          <div>
            <p>
              Trans-perineal biopsies have become increasingly common in
              countries such as Norway, Australia, and the UK but are not yet
              widespread in North America. Some studies show that they offer the
              same accuracy as a transrectal biopsy, but a much lower risk of
              infection and sepsis when compared to a transrectal biopsy. In a
              trans-perineal biopsy, a needle is inserted into the prostate via
              the perineum, the skin behind the testicles.
            </p>

            <p>
              This biopsy is usually done under a local anesthetic, allowing
              patients to remain awake during the procedure. The freezing in the
              perineum may sting a little before turning numb. An ultrasound
              probe is then inserted into the rectum to help guide the biopsy
              needle through the perineum and into the prostate. A number of
              ‘cores’ (usually 12) are then taken.
            </p>

            <p>
              The procedure can also be done under a general anesthetic to allow
              the doctor to take more samples and/or for better patient comfort.
            </p>

            <p>
              Further imaging may be required for higher risk prostate cancers
              that are suspected of having spread including potential PET scans
              or PSMA PET scans.
            </p>
          </div>
        </TitleAndContent>

        <TitleAndContent
          title="Pros and Cons of Perineal vs. TRUS-Guided Prostate Biopsies"
          className="max-w-[1000px]"
          titleWidth="max-w-[500px]"
        >
          <YoutubeIframe videoId="k1nWmIOajP4" />
        </TitleAndContent>
      </div>
    </>
  );
};

export default BiopsyAndImaging;
