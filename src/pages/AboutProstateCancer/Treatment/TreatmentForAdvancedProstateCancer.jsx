import PostTitle from "../../../components/post-section/PostTitle";
import ExpendableContent from "../../../components/post-section/ExpendableContent";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import TreatmentOneOnOneBox from "./TreatmentOneOnOneBox";

const TreatmentForAdvancedProstateCancer = () => {
  return (
    <div>
      <section>
        <PostTitle>
          Treatment for <br />
          <span className="text-blue">advanced prostate cancer</span>
        </PostTitle>

        <div className="mb-20"></div>

        <TreatmentOneOnOneBox />
      </section>

      <section>
        <h2 className="text-center">
          First Line Treatment: <br />
          <span className="text-3xl text-blue">
            Hormone Therapy (Androgen Deprivation Therapy)
          </span>
        </h2>

        <div className="mb-10"></div>

        <div className="max-w-[700px] mx-auto">
          <p>
            Testosterone is a type of hormone called an androgen. Testosterone
            is made by your testicles and has been found to stimulate prostate
            cancer growth.
          </p>
          <p>
            Androgen deprivation therapy (ADT) works by reducing the amount of
            testosterone in your body, which in turn may stop your tumours from
            growing.
          </p>

          <ExpendableContent>
            There are different types of drugs used for ADT:
            <ul className="pl-4 list-disc">
              <li>
                LHRH agonists
                <ul className="list-[circle] pl-4">
                  <li>
                    e.g. leuprolide (Lupron), goserelin (Zoladex, and
                    triptorelin (Trelstar)
                  </li>
                </ul>
              </li>
              <li>
                LHRH antagonists
                <ul className="list-[circle] pl-4">
                  <li>E.g. degarelix (Firmagon)</li>
                </ul>
              </li>
              <li>
                Androgen synthesis inhibitors
                <ul className="list-[circle] pl-4">
                  <li>e.g. Abiraterone (Zytiga)</li>
                </ul>
              </li>
              <li>
                Anti-androgens
                <ul className="list-[circle] pl-4">
                  <li>
                    e.g. bicalutamide (Casodex), flutamide, nilutamide
                    (Anandron)
                  </li>
                </ul>
              </li>
            </ul>
            <div className="mb-3"></div>
            <p>
              ADT is usually the first line of therapy for advanced prostate
              cancer. While hormone therapy works to shrink prostate cancer
              cells, it usually does not destroy them. ADT is therefore a
              prostate cancer treatment, rather than a prostate cancer cure.
            </p>
            <p>
              ADT is effective, but known to have many side effects including
              weight gain, muscle loss, mood swings, and loss of sex drive. We
              highly recommend that if you have been put on hormone therapy, or
              may be put on hormone therapy, you consider taking this free
              online course:{" "}
              <a href="https://www.lifeonadt.com" target="_blank">
                www.lifeonadt.com
              </a>
              . Life on ADT is a 1.5 hour online course and workbook that will
              help you and your loved ones manage your side effects and maintain
              a good quality of life while on ADT.
            </p>
            <div className="mb-5"></div>
            <div className="outer-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eS4zoYo4eAk"
                title="YouTube video player"
                frameBorder="0"
                className="inner w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </ExpendableContent>
        </div>
      </section>

      <section>
        <h2 className="text-center">
          Second-Line Treatment: <br />
          <span className="text-blue text-3xl">
            Systemic Therapy (Chemotherapy)
          </span>
        </h2>
        <div className="mb-10"></div>
        <div className="max-w-[700px] mx-auto">
          <p>
            When hormone therapy is no longer decreasing or stabilizing your
            PSA, your cancer is called CRPC (castration-resistant prostate
            cancer).
          </p>

          <ExpendableContent>
            CRPC is usually treated with chemotherapy when hormone therapy is no
            longer working.
            <ul className="list-disc pl-4">
              <li>Docetaxel</li>
              <li>Cabazitaxel</li>
              <li>Abiraterone</li>
              <li>Enzalutamide</li>
              <li>Radium 22-3</li>
            </ul>
          </ExpendableContent>
        </div>
      </section>

      <TitleAndContent title="Resources" className="max-w-[700px]">
        <ul className="list-disc pl-4">
          <li>
            <a href="https://www.advancedprostatecancer.ca/" target="_blank">
              Advancedprostatecancer.ca{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.advancedprostatecancer.ca/monthly-support-group"
              target="_blank"
            >
              Advanced Prostate Cancer Support Group
            </a>
          </li>
          <li>
            <a href="https://www.lifeonadt.com/" target="_blank">
              Life on ADT Course and Book
            </a>
          </li>

          <li>
            <a
              href="https://www.advancedprostatecancer.ca/videos"
              target="_blank"
            >
              Video Library
            </a>
          </li>
        </ul>
      </TitleAndContent>
    </div>
  );
};

export default TreatmentForAdvancedProstateCancer;
