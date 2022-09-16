import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import PageTitle from "../../components/PageTitle";

const IfIWereTom = () => {
  return (
    <>
      <PageTitle logoSrc="/assets/img/get-support/if-i-were-tom/iiwt-logo.png">
        <p className="text-base w-full md:w-auto text-center md:text-start mb-10">
          Tom is dealing with prostate cancer.
          <br /> The waiting. The treatments. The side effects.
          <br />
          <span className="text-blue">What would you do in his place?</span>
        </p>
      </PageTitle>

      <div className="container">
        <section className="flex flex-col items-center">
          <div className="max-w-[650px] mb-10">
            <p className="mb-10">
              Have you been recently diagnosed with prostate cancer? Are you
              still trying to figure out what to do?
            </p>
            <p className="mb-10">
              It’s always important to make an informed decision when dealing
              with your health. But it’s even more important when you’re dealing
              with prostate cancer.
            </p>
            <p className="mb-10">
              If I Were Tom is an interactive website that will take you through
              Tom’s journey with prostate cancer to help you make decisions on
              yours.
            </p>
            <p>
              Review your treatment options through expert videos and tips.
              Understand the side effects and impacts on your quality of life
              before you make your decision. And learn what you can do to
              improve your quality of life with, and after, cancer.
            </p>
          </div>

          <div className="mb-10">
            <PrimaryBtn
              href="https://ifiweretom.ca/"
              className="btn-main text-center"
            >
              GET STARTED WITH
              <br /> IF I WERE TOM
            </PrimaryBtn>
          </div>

          <div className="max-w-[650px]">
            <p>
              Prostate cancer grows slowly when it’s confined to the prostate.
              You usually have time to understand whether you’re a better
              candidate for active surveillance, surgery, or radiation. If
              you’re in advanced stages, you’ll need to make decisions about
              hormone therapy, chemotherapy, and other treatment options. Get
              the help you need with If I Were Tom.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IfIWereTom;
