import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import ExpendableContent from "../../../components/post-section/ExpendableContent";

import Accordion from "../../../components/Accordion";
import AccordionTitle from "../../../components/AccordionTitle";
import AccordionContent from "../../../components/AccordionContent";
import { Link } from "react-router-dom";

const ThePSATestAndTheDRE = () => {
  return (
    <>
      <PostTitle>
        The <span className="text-blue">PSA Test</span> and the{" "}
        <span className="text-blue">DRE</span>
      </PostTitle>
      <div className="mb-10"></div>

      <div className="max-w-[1000px] mx-auto">
        <p className="mb-5">
          Signs of prostate cancer can be found during a
          <i> Digital Rectal Exam (DRE)</i>. During this exam a doctor will
          determine if your prostate, which is normally smooth, feels lumpy or
          hardened. It is a quick and easy diagnostic tool. Though it will not
          detect all cases, it can help to determine whether further testing is
          needed. A DRE should be done in conjunction with a Prostate Specific
          Antigen (PSA) test to determine if any enlargement or hardening found
          during a DRE is also related to a raised PSA level.
        </p>
        <p className="mb-5">
          The
          <i> PSA test </i> is a simple blood test that measures the amount of a
          protein called PSA (Prostate Specific Antigen) in a man’s blood. PSA
          is a glycoprotein that is produced by normal prostate cells, with a
          small amount found in the bloodstream.
        </p>

        <ExpendableContent>
          <p className="mb-5">
            However, higher levels of PSA may be an indicator of prostate cancer
            or that something else is happening in the prostate gland. What is
            considered a ‘normal’ level, or number, depends on a man’s age and
            race. (Generally, the older a man is, the higher his PSA level)
          </p>
          <p className="mb-5">
            Though the
            <i> PSA test </i>
            is the best blood test available for indicating a possibility of
            prostate cancer, a high number alone does not necessarily indicate
            that you have prostate cancer. Rather, it indicates the potential
            for a need for further investigation. Men who have PSA levels that
            are high for their individual circumstances will then be sent for a
            prostate biopsy.
          </p>

          <p className="font-bold mb-5">
            Note: Prostate Cancer Foundation BC recommends that every man over
            the age of 45 start a discussion with their health care provider
            about getting checked.
          </p>

          <p>
            We encourage men to use PSA testing as part of "smart screening" - a
            personalized approach in which men are tested to establish a
            baseline number. Subsequent tests can then be performed to monitor
            any unusual (sudden or quick) changes to the baseline levels. If
            such a change is detected, the patient and his health care provider
            are then able to discuss a <u>course of action</u> based on his age,
            medical history, health and personal preferences including{" "}
            <u>his goals after treatment</u>. (If you need a place to keep track
            of answers, you can order a free copy of Your Prostate Cancer
            Passport <Link to="/get-support/reef-knot-kits">here</Link> which
            contains a list of suggested questions to ask your doctor and a
            space to jot down your notes)
          </p>
        </ExpendableContent>
      </div>

      <section className="max-w-[1000px] mx-auto">
        <h2 className="text-center mb-10">PSA Test FAQ</h2>
        <Accordion>
          <div className="bg-blue mb-5">
            <AccordionTitle
              title="I’m going for a PSA test. What do I need to know?"
              idx={0}
            />
            <AccordionContent idx={0}>
              <div className="p-11 pt-0">
                <p>
                  <a
                    target="_blank"
                    href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:a6b9db7d-1953-3f24-855b-24aa2b355b6a"
                    className="!text-white"
                  >
                    Click here for a handout
                  </a>{" "}
                  on what not to do before your PSA test.
                </p>
              </div>
            </AccordionContent>
          </div>

          <div className="bg-blue mb-5">
            <AccordionTitle title="Should I get checked?" idx={1} />
            <AccordionContent idx={1}>
              <div className="md:p-11 md:pt-0">
                <img
                  className="w-full"
                  src="/assets/img/about-prostate-cancer/psa/flowchart.jpeg"
                />
              </div>
            </AccordionContent>
          </div>

          <div className="bg-blue mb-5">
            <AccordionTitle title="Is my PSA test covered?" idx={2} />
            <AccordionContent idx={2}>
              <div className="p-11 pt-0">
                <p>
                  PSA tests are not covered by provincial health plans in BC and
                  Ontario. Unless you are deemed to be at higher risk of
                  prostate cancer (due to a family history, previously abnormal
                  PSA test, etc.), you will have to pay out of pocket. In BC,
                  the cost is $37. In Ontario, it’s $35.
                </p>
                <p>
                  You can order a test{" "}
                  <a
                    href="https://www.lifelabs.com/test/prostate-specific-antigen-psa-test/"
                    className="!text-white"
                    target="_blank"
                  >
                    here:
                  </a>
                  <ul className="list-disc pl-4">
                    <li>Pay for your test online.</li>

                    <li>
                      Print out the requisition that’s been emailed to you and
                      have a doctor sign it.
                    </li>
                    <li>
                      Bring your signed requisition to any LifeLabs location
                      near you to have your blood sample take.
                    </li>
                  </ul>
                </p>
              </div>
            </AccordionContent>
          </div>

          <div className="bg-blue mb-5">
            <AccordionTitle
              title="Why is the PSA test considered controversial? Are you recommending the best guidelines for getting checked?"
              idx={3}
            />
            <AccordionContent idx={3}>
              <div className="p-11 pt-0">
                <p>
                  The PSA test is controversial because, while it is the best
                  available blood test to check for prostate cancer warning
                  signs, it also has limitations. PSA tests can result in a
                  false-positive result (indicates that you have prostate cancer
                  but do not), false-negative (indicates you do not have
                  prostate cancer but you do), and overdiagnosis and
                  overtreatment of prostate cancer.
                </p>
                <p>
                  As a result, a few years ago, there was a push to stop regular
                  screening for prostate cancer with PSA tests to reduce the
                  potential for over-diagnosis and -treatment. However, research
                  has shown that in the years following these changes in
                  guidelines, advanced (metastatic) prostate cancer cases have
                  increased – indicating the possibility that while fewer men
                  are being diagnosed with false positives, more men with
                  metastatic and potentially deadlier prostate cancers are
                  slipping through the cracks.
                </p>

                <p>
                  Based on this research, we strongly encourage men to discuss
                  getting a PSA test with their healthcare providers –{" "}
                  <i>especially</i> if you have any{" "}
                  <Link className="!text-white" to="/about-prostate-cancer/what-is-prostate-cancer/risk-factors">
                    risk factors
                  </Link>{" "}
                  for prostate cancer. It is important that the PSA test be
                  interpreted within the context of a patient’s medical history,
                  that results be confirmed by a biopsy or other imaging, and
                  that PSA tests be repeated regularly to determine the speed at
                  which the PSA level is rising (if at all).
                </p>

                <p>
                  <a
                    target="_blank"
                    href="https://www.cua.org/system/files/Guideline-Files/7851_v6_1.pdf"
                    className="!text-white"
                  >
                    Click here
                  </a>{" "}
                  for the Canadian Urological Association’s 2022 update on PSA
                  testing guidelines.
                </p>
              </div>
            </AccordionContent>
          </div>
        </Accordion>

        <div className="mb-20"></div>

        <div className="outer-video">
          <iframe
            className="inner w-full h-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fZOrlKZQuck"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ThePSATestAndTheDRE;
