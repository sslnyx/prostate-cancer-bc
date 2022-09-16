import ImageAndText from "../../../components/post-section/ImageAndText";
import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import ExpendableContent from "../../../components/post-section/ExpendableContent";

const TheProstate = () => {
  return (
    <div>
      <PostTitle>
        The <span className="text-blue">Prostate</span>
      </PostTitle>

      <ImageAndText
        imgSrc="/assets/img/about-prostate-cancer/what-is-prostate-cancer/the-prostate/prostate-1.jpeg"
        c1={5}
        c2={7}
        contentWidth
      >
        <div className="max-w-[450px]">
          <p>
            The prostate is a walnut-sized gland that is part of a male’s
            reproductive system. It is located just below the bladder and
            surrounds the urethra.
          </p>
        </div>
      </ImageAndText>

      <TitleAndContent title="Main Functions">
        <p>The prostate gland has three main functions:</p>
        <p>
          1. The production of seminal fluid (the liquid and nutrients that
          sperm needs to survive) in semen (ejaculate)
        </p>
        <p>2. As a muscle, to help evacuate sperm during ejaculation</p>
        <p>
          3. The control of urine flow, as the prostate surrounds the urethra
        </p>
      </TitleAndContent>

      <TitleAndContent title="Common prostate diseases">
        <p className="font-bold">Benign Prostatic Hyperplasia (BPH)</p>
        <p>
          As a man ages, his prostate generally increases in size - essentially
          constricting the urethra and decreasing urine flow. This is a
          non-cancerous (or benign) disease of the prostate.
        </p>

        <ExpendableContent>
          <div className="py-5">
            <strong>Symptoms:</strong>
            <ul className="list-disc pl-6">
              <li>Incomplete emptying of the bladder</li>
              <li>Frequent, weak urination</li>
              <li>Straining to urinate</li>
              <li>Needing to urinate several times a night</li>
            </ul>
            <img
              className="mx-auto"
              src="/assets/img/about-prostate-cancer/what-is-prostate-cancer/the-prostate/prostate-2.jpeg"
            />
          </div>

          <div className="py-5">
            <strong>Treatments:</strong>
            <ul className="list-disc pl-6">
              <li>
                BPH is generally treated by a treatment called a TURP in which
                an instrument is inserted through the urethra to the prostate.
                Some tissue of the enlarged prostate is cut away, effectively
                re-sectioning the prostate and removing pressure on the urethra,
                allowing the patient’s urination to return to normal.
              </li>
            </ul>
          </div>
        </ExpendableContent>
        <div className="mb-10"></div>

        <p className="font-bold">Prostatitis</p>

        <p>
          Prostatitis refers to the infection or inflammation of the prostate.
          It is not cancer. It can be acute (sudden and short term) or chronic
          (long term).
        </p>

        <ExpendableContent>
          <strong>Symptoms:</strong>
          <ul className="list-disc pl-6 mb-5">
            <li>Frequent and urgent urination</li>
            <li>Slowed urine stream</li>
            <li>
              Pain near the prostate (rectum, genitals, lower back/abdomen)
            </li>
          </ul>

          <strong>Treatments:</strong>

          <ul className="list-disc pl-6">
            <li>Antibiotics</li>
            <li>Anti-inflammatory medications like ibuprofen (Advil)</li>
          </ul>
        </ExpendableContent>
      </TitleAndContent>
    </div>
  );
};

export default TheProstate;
