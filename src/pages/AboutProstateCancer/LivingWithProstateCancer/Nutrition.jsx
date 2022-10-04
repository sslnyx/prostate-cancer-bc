import PostTitle from "../../../components/post-section/PostTitle";
import Row from "../../../components/rows-cols/Row";
import Col from "../../../components/rows-cols/Col";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import { Link } from "react-router-dom";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import PageTitle from "../../../components/PageTitle";

const Nutrition = () => {
  return (
    <>
      <PageTitle title="Nutrition" />
      <div className="container">
        <section>
          {/* <PostTitle>Nutrition</PostTitle>
        <div className="mb-10"></div> */}

          <Row>
            <Col w={6}>
              <div className="-mx-10 mb-5 md:mb-0">
                <img src="/assets/img/about-prostate-cancer/living-with-prostate-cancer/nutrition.jpeg" />
              </div>
            </Col>
            <Col w={6}>
              <div className="max-w-[450px] mx-auto py-5">
                <p>
                  Eating well is one of the most important things that a man
                  with prostate cancer can do for his health. Following the
                  Canada Food Guide is an easy way to ensure that you’re getting
                  the appropriate nutrition that your body needs. Basically,
                </p>

                <ul className="list-disc pl-4 mb-5">
                  <li>
                    Eat plenty of fruits and vegetables every day (about ½ of
                    each meal)
                  </li>
                  <li>
                    Eat high protein foods (plant-based and/or low-fat) When
                    eating grains, choose whole grains
                  </li>

                  <li>Make water your drink of choice</li>
                </ul>

                <p>
                  Remember that eating well is easier when you enjoy it. Have
                  fun making your meals, eat healthy foods that you enjoy, and
                  try to enjoy your food with others when possible.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <TitleAndContent title="Resources" className="max-w-[1000px]">
          <div className="max-w-[700px] mx-auto mb-5">
            <ul className="list-disc pl-4">
              <li className="mb-3">
                <Link to="/get-support/reef-knot-kits">
                  Your Prostate Cancer Nutrition Guide
                </Link>
              </li>
              <li className="mb-3">
                <a
                  href="https://ifiweretom.ca/living-with-prostate-cancer"
                  target="_blank"
                >
                  If I Were Tom
                </a>
              </li>
              <li>
                <a href="https://food-guide.canada.ca/en/" target="_blank">
                  Canada Food Guide
                </a>
              </li>
            </ul>

            <div className="mb-10"></div>

          </div>

          <div>
            <YoutubeIframe videoId="UqtDw1CghzQ" />
            <div className="mb-5"></div>
            <YoutubeIframe videoId="gm_y1nYbFi4" />

            <div className="mb-5"></div>
          </div>
        </TitleAndContent>
      </div>
    </>
  );
};

export default Nutrition;
