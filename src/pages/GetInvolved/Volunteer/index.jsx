// import React from 'react'
import PageHero from "../../../components/PageHero";
import PageTitle from "../../../components/PageTitle";
import VolunteerForm from "./VolunteerForm";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div>
      <PageHero imgSrc={"/assets/img/get-involved/volunteer/hero.jpeg"} />

      <PageTitle
        title="volunteer"
        description="With only five staff members and a high ratio of volunteers, the Foundation is always in need of volunteers to assist with its many activities and committees."
      />

      <section>
        <div className="container !max-w-[850px]">
          <h3 className="mb-5">
            We would love to have you volunteer with us, especially if you:
          </h3>
          <ul className="list-disc mb-5 list-inside">
            <li>are a patient hoping to support others</li>
            <li>
              have an interesting skill you think could help the Foundation and
              those it supports
            </li>

            <li>
              know someone with prostate cancer and want to honour them, or
            </li>
            <li>
              are just looking for a fun way to get involved in your community!
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container !max-w-[850px]">
          <div>
            <h3 className="mb-5">
              See some of our current volunteer opportunities below:
            </h3>

            <a
              href="/assets/pdfs/call-for-photographers.pdf"
              className="text-blue underline"
              target="_blank"
            >
              <span>Portrait photographer</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-wrap -mx-10">
            <div className="basis-full md:basis-1/2 mb-5 md:mb-0 px-10">
              <div className="max-w-[450px]">
                <h2 className="text-[3rem] leading-[3.5rem] md:text-[4rem] md:leading-[5rem] mb-5">
                  Volunteering with the Foundation, Support Groups or Events
                </h2>
                <p>
                  Volunteering with the Foundation or one of its sponsored
                  events is easy. Just fill out the online form below and we’ll
                  be in touch. We welcome volunteers from anywhere in Canada.
                </p>
              </div>
            </div>

            <div className="basis-full md:basis-1/2 px-10">
              <img
                className="w-full"
                src="/assets/img/get-involved/volunteer/hands.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <VolunteerForm />
      </section>

      <section>
        <div className="container max-w-[1024px]">
          <div className="flex flex-row flex-wrap -mx-10">
            <div className="basis-full md:basis-1/2 px-10">
              <img
                className="w-full"
                src="/assets/img/get-involved/volunteer/board.jpeg"
                alt=""
              />
            </div>

            <div className="basis-full md:basis-1/2 px-10">
              <div>
                <h2 className="text-[5rem] leading-[5.5rem] mb-5">
                  Volunteering for the Board
                </h2>
                <p>
                  Information on becoming a Foundation Board member or
                  participation in the Board may be obtained by{" "}
                  <Link
                    to="/about-us/contact-us"
                    className="underline text-blue"
                  >
                    contacting
                  </Link>{" "}
                  the Chairman or Vice Chairman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
