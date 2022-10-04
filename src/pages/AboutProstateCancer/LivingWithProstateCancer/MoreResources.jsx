import PostTitle from "../../../components/post-section/PostTitle";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const MoreResources = () => {
  return (
    <>
      <PageTitle p1="More" p2="Resources" className="title-light" />
      {/* <PostTitle>More Resources</PostTitle> */}
      <div className="container">
        <section>
          <div className="max-w-[700px] mx-auto">
            <ul className="list-disc pl-4">
              <li className="mb-5">
                Quality of Life videos: <br /> <div className="mb-3"></div>
                <a
                  href="https://youtube.com/playlist?list=PLoqgqU2PgZ9xmHZwgwmZ51cv_z8w-NKvC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/img/about-prostate-cancer/living-with-prostate-cancer/quality-of-life.jpg" />
                  {/* https://youtube.com/playlist?list=PLoqgqU2PgZ9xmHZwgwmZ51cv_z8w-NKvC */}
                </a>
              </li>
              <li>
                Visit{" "}
                <Link to="/get-support/more-resources-for-patients">
                  Quality of Life Resources on PCFBC site
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MoreResources;
