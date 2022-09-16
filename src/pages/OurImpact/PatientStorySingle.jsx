import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import Gallery from "../../components/Gallery";
import ArrowBtn from "../../components/bttons/ArrowBtn";

const PatientStorySingle = () => {
  const [article, setArticle] = useState();
  const [nextSlug, setNextSlug] = useState("");
  const [prevSlug, setPrevSlug] = useState("");
  //   const { pathname } = useLocation();

  const navigate = useNavigate();
  const {
    stories: { nodes },
  } = useOutletContext();
  const { storySlug } = useParams();

  // console.log(data);

  const postUrl = window.location.href;

  //   let article = null;
  //   let nextSlug = null;
  //   let prevSlug = null;

  //   data.find((story, i) => {
  //     if (story.slug === storySlug) {
  //       article = story;
  //       nextSlug = data[i + 1]?.slug;
  //       prevSlug = data[i - 1]?.slug;
  //     }
  //   });

  //   const {
  //     title,
  //     storyHeadings: { headline, description, subheading },
  //     story: { storyGallery, content },
  //   } = article;

  const shareBtns = [
    {
      link: "https://www.facebook.com/sharer.php?u=" + postUrl,
      imgName: "facebook-navy",
    },
    {
      link: "https://twitter.com/intent/tweet?url=" + postUrl,
      imgName: "twitter-navy",
    },
    {
      link: "https://www.linkedin.com/shareArticle?mini=true&url=" + postUrl,
      imgName: "linkedin-navy",
    },
    // {
    //   link: "#",
    //   imgName: "instagram-navy",
    // },
    // {
    //   link: "#",
    //   imgName: "youtube-navy",
    // },
    {
      link:
        "mailto:?subject=PCFBC Story - " +
        article?.title +
        "&body=Check out this site " +
        postUrl,
      imgName: "email-navy",
    },
  ];

  useEffect(() => {
    let pageExist = false;
    pageExist = nodes.find((story, i) => {
      if (story.slug === storySlug) {
        setArticle(story);
        if (nodes[i + 1]) {
          setNextSlug(nodes[i + 1].slug);
        } else {
          setNextSlug(nodes[0]?.slug);
        }

        nodes[i - 1]
          ? setPrevSlug(nodes[i - 1].slug)
          : setPrevSlug(nodes[nodes.length - 1].slug);
        return true;
      }
    });

    if (!pageExist) navigate("/page404");
  }, [storySlug]);

  //   console.log(article);

  return (
    <>
      {article && (
        <>
          <section>
            <div className="container">
              {article?.story?.storyGallery?.length && (
                <Gallery gallery={article.story.storyGallery} />
              )}
            </div>
          </section>

          <section>
            <div className="container">
              <div className="max-w-[1000px] mx-auto">
                {/* {JSON.stringify(article)} */}
                <h2 className="mb-5">{article?.storyHeadings?.subheading}</h2>
                <h1 className="text-blue mb-5">
                  {article?.storyHeadings?.headline}
                </h1>
                <p className="italic max-w-[500px]">
                  {article?.storyHeadings?.description}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div
                className="max-w-[700px] mx-auto mb-10"
                dangerouslySetInnerHTML={{ __html: article.story.content }}
              ></div>

              <div className="flex justify-between max-w-[700px] mx-auto">
                {prevSlug ? (
                  <Link to={`/our-impact/patient-stories/${prevSlug}`}>
                    <ArrowBtn color="fill-darkBlue" left>
                      Prev
                    </ArrowBtn>
                  </Link>
                ) : (
                  <div></div>
                )}

                {nextSlug ? (
                  <Link to={`/our-impact/patient-stories/${nextSlug}`}>
                    <ArrowBtn color="fill-darkBlue">Next</ArrowBtn>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <p className="font-bold text-center">
                Click the icon below to share this story with others
              </p>

              <div className="flex justify-center">
                {shareBtns.map(({ link, imgName }, i) => (
                  <a key={i} className="px-2" target="_blank" href={link}>
                    <img
                      className="w-[35px]"
                      src={`/assets/img/icons/share-buttons/${imgName}.svg`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PatientStorySingle;
