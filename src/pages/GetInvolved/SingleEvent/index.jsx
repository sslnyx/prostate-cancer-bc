import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Gallery from "../../../components/Gallery";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";

const SingleEvent = () => {
  const { eventId } = useParams();
  const events = useOutletContext();
  const navigate = useNavigate();
  const event = events.find(({ slug }) => slug === eventId);

  const {
    title,
    event: { featuredImage, logo, description, website, gallery },
  } = event;

  useEffect(() => {
    !event ? navigate("/page404") : "";
  }, []);

  return (
    // <div></div>
    <div className={`page-${event.slug}`}>
      {featuredImage?.sourceUrl ? (
        <div className="h-[350px] md:h-[600px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={featuredImage?.sourceUrl}
            alt="Event Hero"
          />
        </div>
      ) : (
        ""
      )}
      <section>
        <div className="container">
          <div className="flex flex-row flex-wrap -mx-5 items-center">
            <div className="px-5 basis-full md:basis-8/12">
              <h1 className="text-blue md:text-[4rem] 2xl:text-[5.5rem]">
                {title}
              </h1>
            </div>
            <div className="px-5 basis-full md:basis-4/12 flex justify-center">
              {logo?.srcSet ? (
                <img
                  className="w-[250px] md:w-full object-contain"
                  srcSet={logo?.srcSet}
                  alt="Event Logo"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="max-w-[670px] mx-auto">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>

            {website ? (
              <>
                <br />
                <p>
                  MORE ABOUT THIS EVENT, PLEASE VISIT:{" "}
                  <a
                    className="text-blue underline"
                    target="_blank"
                    href={website}
                  >
                    {website}
                  </a>
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

      {gallery?.length && (
        <section>
          <div className="container text-center">
            <h2 className="text-6xl mb-10">Gallery</h2>
            <Gallery gallery={gallery} />
          </div>
        </section>
      )}
      
      <div className="flex justify-center">
        <PrimaryBtn href="/get-involved/find-an-event" className="btn-main">
          BACK TO EVENTS
        </PrimaryBtn>
      </div>
      <div className="mb-[100px]"></div>
    </div>
  );
};

export default SingleEvent;
