import PostTitle from "../../../components/post-section/PostTitle";
import Accordion from "../../../components/Accordion";
import AccordionTitle from "../../../components/AccordionTitle";
import AccordionContent from "../../../components/AccordionContent";
import { Link } from "react-router-dom";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";

const ChoosingATreatment = () => {
  return (
    <div>
      <section>
        <PostTitle>Choosing a Treatment</PostTitle>
        <div className="mb-10"></div>
        <p className="max-w-[600px] mx-auto mb-10">
          Most patients with low- to moderate- risk prostate cancer will have
          time to think about their treatment choice. Here are some things to
          think about before making a decision:
        </p>

        <div className="max-w-[1000px] mx-auto">
          <YoutubeIframe videoId="Al8HEFr44C0" />

          <div className="mb-10"></div>

          <Accordion>
            <div className="bg-blue mb-5">
              <AccordionTitle
                idx={0}
                title="1.	Ensure you’ve reviewed your full medical history. "
              />
              <AccordionContent idx={0}>
                <div className="p-10 pt-0">
                  <ul className="list-disc pl-4">
                    <li className="mb-5">
                      Make sure your healthcare providers have your full health
                      history as well as your family’s. If they don’t have it,
                      give it to them.
                    </li>
                    <li className="mb-5">
                      Ask how your age and general health could affect your
                      treatment choice.
                    </li>
                    <li>
                      Ask if you have any condition(s) that might increase the
                      risk of treatment. For example, conditions such as
                      diabetes, heart problems, or bowel disease might increase
                      your risk of sexual, urinary, or bowel problems.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </div>

            <div className="bg-blue mb-5">
              <AccordionTitle idx={1} title="2.	Think about your values. " />
              <AccordionContent idx={1}>
                <div className="p-10 pt-0">
                  <p>Discuss these questions with your spouse or partner:</p>
                  <ul className="list-disc pl-4">
                    <li className="mb-5">
                      Do I want to get rid of my cancer, even if I might have
                      sexual or urinary problems?
                    </li>
                    <li className="mb-5">
                      Which side effects would upset me most?
                    </li>
                    <li>
                      Would I be okay with active surveillance, even if I am
                      worried and have to see a health care provider more often?
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </div>
            <div className="bg-blue mb-5">
              <AccordionTitle
                idx={2}
                title="3.	Find out all of your treatment options."
              />
              <AccordionContent idx={2}>
                <div className="p-10 pt-0">
                  <ul className="list-disc pl-4">
                    <li className="mb-5">
                      Ask your health care providers about each choice,
                      including benefits and side effects. (You can keep track
                      of your answers in{" "}
                      <Link
                        to="/get-support/reef-knot-kits"
                        className="!text-white"
                      >
                        Your Prostate Cancer Passport
                      </Link>
                      )
                    </li>
                    <li className="mb-5">
                      Remember that some health care providers may only suggest
                      the option they know best. Typically:
                      <div className="mb-3"></div>
                      <ul className="list-circle">
                        <li className="mb-3">
                          - A radiation oncologist can discuss active
                          surveillance and radiation treatment.
                        </li>
                        <li>
                          - A urologist can discuss active surveillance and
                          surgery.
                        </li>
                      </ul>
                    </li>
                    <li>
                      If you’re uncomfortable with the provider you have seen,
                      and your cancer does not require immediate treatment, you
                      have the right to ask for a second opinion. You may need
                      your primary physician’s referral to get a second opinion
                      from a specialist.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </div>
          </Accordion>

          <p className="text-xs">
            Adapted from:
            <a
              href="https://choosingwiselycanada.org/wp-content/uploads/2017/06/Prostate-cancer-EN.pdf"
              target="_blank"
            >
              https://choosingwiselycanada.org/wp-content/uploads/2017/06/Prostate-cancer-EN.pdf
            </a>
            <br />
            <div className="mb-3"></div>
            Resources: <br />
            <a
              href="https://www.youtube.com/watch?v=zhv6vev0Fpc"
              target="_blank"
            >
              But What If...? Regret and Prostate Cancer Treatment Choices - Dr.
              Christopher Wallis
            </a>
          </p>

          <div className="mb-20"></div>
          <YoutubeIframe videoId="zhv6vev0Fpc" />
        </div>
      </section>
    </div>
  );
};

export default ChoosingATreatment;
