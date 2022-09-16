import PostTitle from "../../../components/post-section/PostTitle";
import Row from "../../../components/rows-cols/Row";
import Col from "../../../components/rows-cols/Col";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import { Link } from "react-router-dom";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";

const Exercise = () => {
  return (
    <div>
      <section>
        <PostTitle>Exercise</PostTitle>
        <div className="mb-10"></div>
        <Row>
          <Col w={6}>
            <div className="-mx-10 mb-5 md:mb-0">
              <img src="/assets/img/about-prostate-cancer/living-with-prostate-cancer/exercise.jpeg" />
            </div>
          </Col>
          <Col w={6}>
            <div className="max-w-[450px] mx-auto py-5">
              <p>
                Exercise is the single most beneficial thing you can do for
                yourself – before, during, or after a cancer diagnosis –
                decreasing your chances of recurrence or progression and even
                helping you better cope with treatment side effects.
              </p>
              <p>
                Exercise is more sustainable when you enjoy it. Whether you
                prefer going for bike rides with your partner, group fitness
                classes, or team sports, just getting yourself moving will have
                huge benefits for you on your cancer journey.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <TitleAndContent title="Resources">
        <div>
          <ul className="list-disc pl-4">
            <li className="mb-5">
              <a href="https://www.buttsinmotion.ca/" target="_blank">
                Free and fun exercise with other prostate cancer patients
                including yoga and online fitness classes - Butts in Motion
              </a>
            </li>

            <li className="mb-5">
              <Link to="/get-support/reef-knot-kits">
                Your Prostate Cancer Exercise Guide
              </Link>
            </li>

            <li className="mb-5">
              <a
                href="https://ifiweretom.ca/living-with-prostate-cancer"
                target="_blank"
                rel="noopener noreferrer"
              >
                If I Were Tom
              </a>
            </li>

            {/* <li>
              Helpful videos


              <ul className="list-[circle] pl-4">
                <li>
                  All about{" "}
                  <a
                    href="https://www.youtube.com/watch?v=Kqus2I8hpVQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Butts in Motion
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=JrEBklhZbA4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Exercise: Why does this matter to men after a prostate
                    cancer diagnosis – Dr. Kristin Campbell
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=h5KAvFFasdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yoga and prostate cancer – Wayne Porterfield
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <p>Helpful videos:</p>
          <YoutubeIframe videoId="Kqus2I8hpVQ" />
          <div className="mb-5"></div>
          <YoutubeIframe videoId="JrEBklhZbA4" />
          <div className="mb-5"></div>
          <YoutubeIframe videoId="h5KAvFFasdk" />

        </div>
      </TitleAndContent>
    </div>
  );
};

export default Exercise;
