import AccordionCard from "../../../components/AccordionCard";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";

const PrivatelyProvidedHealthServices = () => {
  return (
    <div>
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

        <div className="flex justify-center outer-video my-5">
          <iframe
            className="w-full h-full inner"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XVSychHqXuY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

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
