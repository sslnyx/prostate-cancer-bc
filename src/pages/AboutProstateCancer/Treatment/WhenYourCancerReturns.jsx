import PostTitle from "../../../components/post-section/PostTitle";
import Accordion from "../../../components/Accordion";
import AccordionTitle from "../../../components/AccordionTitle";
import AccordionContent from "../../../components/AccordionContent";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const WhenYourCancerReturns = () => {
  const list1 = [
    "Lymph node involvement: Men who have cancer cells in the lymph nodes in the pelvic region may be more likely to have a recurrence.",
    "Tumor size: In general, the larger the tumor, the greater the chance of recurrence.",
    "Gleason score: The higher the grade, the greater the chance of recurrence. ",
    "Stage: The higher the stage, the greater the risk of recurrence. The staging of your cancer is one of the best factors for predicting future outlook of the cancer.",
  ];
  return (
    <>
      <PageTitle p1="When your" p2="cancer “returns”" className="title-light" />
      {/* <PostTitle>
        When your cancer <span className="text-blue">“returns”</span>{" "}
      </PostTitle> */}

      <div className="container">
        <section>
          <div className="max-w-[1000px] mx-auto">
            <div className="max-w-[700px] mx-auto">
              <p>
                When your prostate cancer has not been cured by your initial
                treatment (radiation or surgery), your cancer may ‘come back.’
                This is called recurrence.
              </p>

              <p>
                After radiation or surgery, your PSA levels should remain
                steady, low and/or undetectable. After treatment, you should
                continue to have PSA tests every few months or so (depending on
                the advice of your doctor) in case there are any surviving
                prostate cancer cells.
              </p>

              <p>
                Your doctor will watch your PSA tests for: the PSA rising, how
                quickly it begins to rise following treatment, and how quickly
                your PSA score doubles (doubling time).
              </p>

              <p>
                Generally, after five years of remission, your chance of
                recurrence is very low.
              </p>

              <p>
                However, if you do find that your PSA number is rising, that may
                mean that a recurrence is happening. You may need to go in for
                further testing, such as X-rays or other imaging tests like bone
                scans and PSMA-PET scans to determine the spread of the cancer.
              </p>
            </div>

            <div className="py-10">
              <Accordion>
                <div className="bg-blue mb-10">
                  <AccordionTitle
                    idx={0}
                    title="How do you know if your cancer will come back or spread?"
                  />

                  <AccordionContent idx={0}>
                    <div className="p-11 pt-0">
                      Some signs that may help you determine your likelihood of
                      recurrence are:
                      <div className="mb-3"></div>
                      <ul className="list-disc pl-4">
                        {list1.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </div>

                <div className="bg-blue">
                  <AccordionTitle idx={1} title="Now what?" />

                  <AccordionContent idx={1}>
                    <div className="p-11 pt-0">
                      <p>
                        Depending on the extent of the spread of your cancer and
                        other factors such as your age, medical history, and
                        site of recurrence, you and your healthcare team will
                        discuss a follow-up treatment.
                      </p>
                      <p>
                        If your PSA level has risen following a prostatectomy,
                        your doctor may recommend “salvage radiation therapy.”
                        Salvage radiation therapy refers to radiation treatments
                        that are given post-surgery in response to your PSA
                        rising.
                      </p>

                      <p>
                        This nomogram from Sloan-Kettering can help you predict
                        whether or not your prostate cancer recurrence can be
                        successfully treated with salvage radiation
                        post-surgery.
                      </p>

                      <p>You may also be given hormone therapy.</p>
                    </div>
                  </AccordionContent>
                </div>
              </Accordion>

              <div className="mb-10"></div>

              <YoutubeIframe videoId="XjNI-723CgE" />
            </div>
          </div>
        </section>

        <TitleAndContent title="Resources">
          <ul className="list-disc pl-4">
            <li>
              <Link to="/get-support/support-groups">Support groups</Link>
            </li>
            <li>
              <a
                href="https://www.mskcc.org/nomograms/prostate/salvage_radiation_therapy"
                target="_blank"
              >
                Salvage Radiation Therapy nomogram
              </a>{" "}
              (predicts whether or not your prostate cancer recurrence can be
              successfully treated with salvage radiation therapy post-surgery)
            </li>
          </ul>
        </TitleAndContent>
      </div>
    </>
  );
};

export default WhenYourCancerReturns;
