import AccordionCard from "../../../components/AccordionCard";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";

const TrialsStudies = () => {
  return (
    <div className="md:px-10">
      <AccordionCard title="Canadian Clinical Cancer Trials">
        <p>
          Canadian Cancer Trials is a search engine for clinical trials
          available in Canada. This link takes you to a search for all trials
          with the key word: “prostate.”
        </p>

        <div className="mb-5">
          You can further refine search results using the filters available on
          the menu on the left-hand side, including by:
          <div className="mb-3"></div>
          <ul className="list-disc pl-4">
            <li>Province</li>
            <li>City</li>

            <li>Trial centre</li>

            <li>Drug</li>

            <li>Your age</li>

            <li>
              Your medical condition:
              <ul className="list-inside list-[circle]">
                <li>Newly diagnosed or your cancer has recurred/spread</li>
                <li>Whether or not you have had chemotherapy</li>
                <li>Whether or not you have had radiation therapy</li>
              </ul>
            </li>
          </ul>
        </div>


        <div>
          <PrimaryBtn
            href="https://canadiancancertrials.ca/Default.aspx?dsEndecaNav=Ro:0,Ns:P_TrialStatus_sort_en%7c101%7c-1%7c,Nrc:id-30-dynrank-disabled%7cid-130-dynrank-disabled%7cid-131-dynrank-disabled%7cid-132-dynrank-disabled%7cid-619-dynrank-disabled%7cid-620-dynrank-disabled%7cid-621-dynrank-disabled%7cid-622-dynrank-disabled%7cid-1,N:4294966747&lang=en"
            className="btn-main"
          >
            Learn More
          </PrimaryBtn>
        </div>
      </AccordionCard>
    </div>
  );
};

export default TrialsStudies;
