import PageTitle from "../../components/PageTitle";
import Accordion from "../../components/Accordion";
import AccordionTitle from "../../components/AccordionTitle";
import AccordionContent from "../../components/AccordionContent";
import FinancialHelpAndResources from "./MoreResourcesAccordionData/FinancialHelpAndResources";
import MediaBooksPodcastsNewsletters from "./MoreResourcesAccordionData/MediaBooksPodcastsNewsletters";
import AdvancePlanning from "./MoreResourcesAccordionData/AdvancePlanning";
import PatientEducationWellnessPrograms from "./MoreResourcesAccordionData/PatientEducationWellnessPrograms";
import PrivatelyProvidedHealthServices from "./MoreResourcesAccordionData/PrivatelyProvidedHealthServices";
import TrialsStudies from "./MoreResourcesAccordionData/TrialsStudies";
import { useOutletContext } from "react-router-dom";

const MoreResourcesForPatients = () => {
  const {
    more_resources_for_patients: { accordion },
  } = useOutletContext();

  return (
    <div>
      <PageTitle
        p1="More Resources"
        p2="For Patients"
        className="title-light"
        description="Prostate Cancer Foundation BC is proud to refer patients to the following organizations who provide further helpful resources to patients and their loved ones."
      />
      <section>
        <div className="container">
          <img
            src="/assets/img/get-support/more-resources-for-patients/patients.jpeg"
            alt=""
          />

          <div className="mb-10"></div>

          <Accordion type="white">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle
                title="Financial Help and Resources"
                type="white"
                idx={0}
              />
              <AccordionContent idx={0} type="white">
                <FinancialHelpAndResources />
              </AccordionContent>
            </div>

            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle
                title="Patient Education & Wellness Programs"
                type="white"
                idx={1}
              />
              <AccordionContent idx={1} type="white">
                <PatientEducationWellnessPrograms />
              </AccordionContent>
            </div>

            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle
                title="Media – Books, Podcasts, Newsletters"
                type="white"
                idx={2}
              />
              <AccordionContent idx={2} type="white">
                <MediaBooksPodcastsNewsletters />
              </AccordionContent>
            </div>

            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle title="Advance Planning" type="white" idx={3} />
              <AccordionContent idx={3} type="white">
                <AdvancePlanning />
              </AccordionContent>
            </div>

            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle title="Trials & Studies" type="white" idx={4} />
              <AccordionContent idx={4} type="white">
                <TrialsStudies />
              </AccordionContent>
            </div>

            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
              <AccordionTitle
                title="Privately-Provided Health Services"
                type="white"
                idx={5}
              />
              <AccordionContent idx={5} type="white">
                <PrivatelyProvidedHealthServices />
              </AccordionContent>
            </div>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default MoreResourcesForPatients;
