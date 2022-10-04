import PostTitle from "../../../components/post-section/PostTitle";
import TitleAndContent from "../../../components/post-section/TitleAndContent";
import VideoGallery from "./VideoGallery";
import { Link } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";

const SexWithAndAfterCancer = () => {
  const list1 = [
    "Oral medications",
    "Injectable medications",
    "Suppositories",
    "Creams",
    "Vacuum devices",
    "Penile prostheses",
    "Penile rehabilitation",
  ];

  const videoList = [
    {
      id: "LwC_FVUge8w",
      title: "What's a man to do? Sexuality after prostate cancer",
    },
    {
      id: "vQ9yaBgdiT8",
      title: "Optimizing Sexual Health After Prostate Cancer",
    },
    {
      id: "yXuKuq_I8ew",
      title: "Sex and Prostate Cancer",
    },
    {
      id: "LV3aYDdblXM",
      title: "Prostate Cancer, Ejaculation, and Orgasm",
    },
    {
      id: "NukYQdXFnBQ",
      title:
        "The Penis, Leakage, and Your Sex Drive After Prostate Cancer Treatment",
    },
    {
      id: "M-EY2SigI84",
      title:
        "Dealing with Erectile Dysfunction after Prostate Cancer Treatment",
    },
  ];
  return (
    <>
      <PageTitle p1="Sex with and" p2="after cancer" className="title-light" />
      {/* <PostTitle>Sex with and after cancer</PostTitle> */}

      <div className="container">
        <section>
          <div className="max-w-[700px] mx-auto">
            <p>
              Treatment often can cause unwanted side effects for sexual
              activity including reduced sex drive, ‘shrinkage,’ impotence or
              erectile dysfunction, and increased anxiety around sexual
              performance. While sexual dysfunction is not a definite side
              effect of prostate cancer treatment, it is a common one and should
              be considered and discussed both with your healthcare provider and
              your partner when choosing your treatment. While sex may look a
              bit different for you, a healthy sexual life is still possible.
            </p>

            <p>
              Aside from researching the following treatments and viewing the
              following videos,{" "}
              <Link to="/get-support/support-groups">support groups</Link> are a
              fantastic resource to talk about the pros and cons of various
              treatment options.
            </p>
          </div>
        </section>

        <TitleAndContent title="Treatments" className="max-w-[1000px]">
          <div className="max-w-[700px] mx-auto mb-10">
            <ul className="list-disc pl-4">
              {list1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <VideoGallery data={videoList} />
          </div>
        </TitleAndContent>
      </div>
    </>
  );
};

export default SexWithAndAfterCancer;
