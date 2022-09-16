import ImageAndText from "../../../components/post-section/ImageAndText";
import PostTitle from "../../../components/post-section/PostTitle";
import Row from "../../../components/rows-cols/Row";
import Col from "../../../components/rows-cols/Col";

const RiskFactors = () => {
  const factors = [
    {
      title: "Age",
      content:
        "The odds of developing prostate cancer increase with age. In other words, the older you are, the more likely you are to be diagnosed with prostate cancer. The lifetime odds of a man developing prostate cancer in his 50’s is 1 in 111. The odds rise to 1 in 30 for men in their 60’s. While very rare, men as young as in their 20’s have been diagnosed. ",
    },
    {
      title: "Race",
      content:
        "It is not clear why, but African-Canadian and Caribbean-Canadian men are at the highest risk of developing prostate cancer. Black men are 76% more likely to be diagnosed with prostate cancer than other Canadian men and are 2.3 times more likely to die from their prostate cancer. ",
    },
    {
      title: "Genetics",
      content:
        " Having a family history of prostate cancer increases a man’s predisposition to developing prostate cancer.  If a man has the BRCA2, or ‘breast cancer’, gene in his family, there is evidence that this also increases prostate cancer risk. If you have a family history of prostate, breast, or ovarian cancer, you may wish to speak to your healthcare provider about a referral for genetic testing to determine your risk of prostate cancer.",
    },
    {
      title: "Diet and Obesity",
      content:
        "High calorie and high fat diets, as well as obesity, may play a role in increasing prostate cancer risk.  A healthy diet and exercise are important no matter what stage of your prostate cancer journey you’re on.",
    },
  ];
  return (
    <div>
      <PostTitle>
        Risk <span className="text-blue">Factors</span>
      </PostTitle>

      <ImageAndText
        imgSrc="/assets/img/about-prostate-cancer/risk-factors/risk-1.jpeg"
        order="reverse"
        c1={6}
        c2={6}
      >
        <div>
          <p>
            The risk factors for developing prostate cancer are not fully
            understood and require more research. However, the following are
            risk factors that have been well-studied and are most likely to
            increase your chances of developing prostate cancer. The more risk
            factors you have, the greater the likelihood that you will develop
            prostate cancer.
          </p>
        </div>
      </ImageAndText>

      {factors.map(({ title, content }) => (
        <section>
          <Row>
            <Col w={6}>
              <div className="flex w-full mb-5 md:mb-0">
                <h2 className="text-white bg-blue p-10 w-full max-w-[400px]">{title}</h2>
              </div>
            </Col>
            <Col w={6}>
              <div className="flex justify-start w-full">
                <p className="">{content}</p>
              </div>
            </Col>
          </Row>
        </section>
      ))}
    </div>
  );
};

export default RiskFactors;
