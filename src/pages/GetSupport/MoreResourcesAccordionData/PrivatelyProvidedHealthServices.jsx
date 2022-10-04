import AccordionCard from "../../../components/AccordionCard";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";

const PrivatelyProvidedHealthServices = () => {
  return (
    <div className="md:px-10">
      <AccordionCard title="Initio">
        <p>
          Initio Medical is the only clinic in Western Canada that offers the
          PSMA PET-CT scan privately (which is only available publicly in Canada
          via clinical trials). Initio’s scan is $3200. More info can be found
          on{" "}
          <a
            className="underline text-blue"
            href="https://initiomedical.ca/booking-costs/"
            target="_blank"
          >
            their website
          </a>{" "}
          here, including the{" "}
          <a
            target="_blank"
            className="underline text-blue"
            href="https://initiomedical.ca/wp-content/uploads/2021/05/INITIO-PSMA-referral-form_compressed.pdf"
          >
            requisition form
          </a>{" "}
          your physician will have to fill out to refer you to the clinic.
        </p>

        <p>
          One of the clinic’s affiliated physicians spoke at our Coast to Coast
          support group in October 2021 about their scanning and how (and why)
          they can be accessed privately:{" "}
          <a
            target="_blank"
            className="underline text-blue"
            href="https://www.youtube.com/watch?v=XVSychHqXuY"
          >
            PSMA PET-CT Imaging: A Patient Perspective
          </a>
        </p>

        <YoutubeIframe videoId="XVSychHqXuY" />
        <div className="mb-5"></div>
        
        <div>
          <PrimaryBtn
            href="https://www.youtube.com/watch?v=XVSychHqXuY"
            className="btn-main"
          >
            See More
          </PrimaryBtn>
        </div>
      </AccordionCard>
    </div>
  );
};

export default PrivatelyProvidedHealthServices;
