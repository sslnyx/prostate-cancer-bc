// import React from "react";
import PageHero from "../../components/PageHero";
import SectionTitle from "../../components/SectionTitle";
import PageTitle from "../../components/PageTitle";
import EventContainer from "./EventContainer";

const EventsArchive = () => {
  return (
    <div>
      <PageHero imgSrc="/assets/img/get-involved/hero.jpeg" />

      <div className="container">
        <PageTitle
          p1="Find An"
          p2="Event"
          className="title-light"
          description="No matter what you’re into – whether it’s motorcycles, winter
              sports, family fun, golfing, visiting local establishments, or
              silent auctions--there’s a fun way for you and your family to get
              involved in supporting Canadian prostate cancer patients. Join us
              in our mission to advocate for prostate cancer patients across
              Canada."
        />

        <section>
          <div className="max-w-[600px] mx-auto">
            <p>
              Our primary source of funding is through our many events which
              bring together individuals, families, corporations, friends,
              patients, and anyone wanting to support a great cause.
            </p>

            <p>
              If you would like to help out at any of our events, please click{" "}
              <a className="underline text-blue" href="/get-involved/volunteer">
                here
              </a>{" "}
               for more information on volunteering with us.
            </p>

            <p>
              If you’re a business interested in sponsoring an event or donating
              prizing, please get in{" "}
              <a
                className="underline text-blue"
                href="mailto: nicole@prostatecancerbc.ca"
              >
                touch with our Event Manager
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <EventContainer />
        </section>
      </div>
    </div>
  );
};

export default EventsArchive;
