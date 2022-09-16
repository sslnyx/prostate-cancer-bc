import PostTitle from "../../../components/post-section/PostTitle";
import TreatmentOneOnOneBox from "./TreatmentOneOnOneBox";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";

const AlternateOrNonRoutineTherapies = () => {
  const listItems = [
    "Surgical castration and testicular implants",
    "Acupuncture to treat incontinence, erectile dysfunction, and/or ADT induced hot flashes",
    "Artificial urinary sphincter or sling implant",
    "Penile implant",
    "Treatments to manage lower limb lymphedema post-prostatectomy",
    "Treatments for post-prostatectomy sepsis, blood clots, wound infections, cardiovascular complications",
    "Treatments to manage urethral blockage post-prostatectomy",
    "Dietary changes to manage radiation therapy-related bowel symptoms",
    "SpaceOar hydrogel rectal spacer",
    "Treatments to manage side-effects from brachytherapy (Low Density Radiation or High-Density Radiation), external beam radiation therapy, image-guided intensity-modulated radiation therapy, and stereotactic body radiotherapy. ",
  ];
  return (
    <div>
      <section>

        <PostTitle>
          Alternate or <br />
          <span className="text-blue">non-routine therapies</span>
        </PostTitle>

        <div className="max-w-[700px] mx-auto py-10">
          <p>
            The following are common non-routine treatments sought by patients
            looking to manage either their prostate cancer or their side effects
            as a result of their prostate cancer treatment. You may wish to
            research these more as potential options, but always check with your
            healthcare provider(s) first about any risks or benefits before
            starting any treatment.
          </p>

          <div className="mb-10"></div>

          <TreatmentOneOnOneBox />

          <div className="mb-10"></div>

          <div>
            <h2 className="mb-10 text-center">Focal therapy</h2>

            <p>
              These are targeted therapies that are potential alternatives to
              active surveillance, surgery, or radiation.
            </p>
            <ul className="list-disc pl-4">
              <li>Cryotherapy</li>
              <li>HIFU - High Intensity Focused Ultrasound</li>
              <li>
                MRI Targeted Focal Laser Thermal Therapy of Prostate Cancer
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TitleAndContent title="Side effect management" className="max-w-[700px]">
        <ul className="list-disc pl-4">
          {listItems.map((item, i) => (
            <li key={i} className="mb-5">{item}</li>
          ))}
        </ul>
      </TitleAndContent>

      <TitleAndContent title="Other" className="max-w-[700px]">
        <p>Genetic testing for personalized medicine</p>
        <YoutubeIframe videoId="uzD4To9vZqU" />
        <div className="mb-10"></div>
        <YoutubeIframe videoId="czZSZIVvfMo" />
        <div className="mb-10"></div>
        <p>Managing side effects with cannabis</p>
        <YoutubeIframe videoId="BXt1p57lNuE" />
        <div className="mb-10"></div>
        <YoutubeIframe videoId="Sh6vK3vMNxQ" />
      </TitleAndContent>
    </div>
  );
};

export default AlternateOrNonRoutineTherapies;
