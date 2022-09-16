import PostTitle from "../../../components/post-section/PostTitle";
import YoutubeIframe from "../../../components/post-section/YoutubeIframe";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import { Link } from "react-router-dom";

const MentalHealthAndWellness = () => {
  return (
    <div>
      <PostTitle>Mental Health & Wellness</PostTitle>

      <section>
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[700px] mx-auto">
            <p>
              A prostate cancer diagnosis can be stressful and can often lead to
              anxiety, depression, or other stress-related mental health issues.
              It is important to try to find ways to manage your stress before
              it worsens.
            </p>
          </div>
          <div className="mb-10"></div>

          <YoutubeIframe videoId="-8gNJN__Mvk" />
        </div>
      </section>

      <TitleAndContent
        title="Managing stress and anxiety"
        className="max-w-[1000px]"
      >
        <div className="max-w-[700px] mx-auto">
          <ul className="list-disc pl-4">
            <li>Mindfulness and meditation are powerful tools</li>
            <li>
              Speak to your healthcare provider about a referral to a
              counsellor, psychologist, or psychiatrist
            </li>
            <li>
              <Link to="/get-support/support-groups">Support groups</Link> and{" "}
              <Link to="/get-support/peer-support">one on one</Link> chats with
              fellow patients can provide you with emotional support
            </li>
            <li>
              <a
                href="https://www.buttsinmotion.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Exercise
              </a>{" "}
              can be hugely beneficial – especially when done with a group
            </li>
          </ul>
        </div>
        <div className="mb-10"></div>

        <YoutubeIframe videoId="oYqax2DRssU" />
      </TitleAndContent>

      <TitleAndContent title="Resources">
        <ul className="list-disc pl-4">
          <li className="mb-3">
            <a
              href="https://ifiweretom.ca/living-with-prostate-cancer"
              target="_blank"
              rel="noopener noreferrer"
            >
              If I Were Tom
            </a>
          </li>

          <li>
            <a
              href="https://www.buttsinmotion.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Butts in Motion
            </a>
          </li>
        </ul>
      </TitleAndContent>
    </div>
  );
};

export default MentalHealthAndWellness;
