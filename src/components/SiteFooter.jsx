import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import footerLogo from "/assets/img/logos/site-footer-logo.svg";
import SubscribForm from "./SubscribForm";

const SiteFooter = ({
  props: {
    company: {
      contact,
      address3: { street, country, province, city, postalCode },
      googleMap,
    },
    socialMedia,
  },
}) => {
  // console.log(Object.entries(contact))
  return (
    <footer>
      <section className="py-[50px] bg-darkBlue text-white">
        <div className="container">
          <div className="flex flex-row flex-wrap justify-between -mx-10">
            <div className="basis-full lg:basis-4/12 px-10 mb-10 xl:mb-0">
              <div className="flex flex-col items-center xl:items-start justify-between h-full">
                <img
                  className="w-[250px] mb-10 lg:mb-5"
                  src={footerLogo}
                  alt="prostatecancer-footer-logo"
                />
                <a
                  className="block mb-10 xl:mb-5"
                  target="_blank"
                  href="https://prostatecancersupport.ca/"
                >
                  <div className="px-[22px] py-5 border-2 border-white w-full flex justify-center items-center max-w-[450px]">
                    <p className="mr-5">
                      Explore our Canada-wide
                      <br /> support initiative
                    </p>

                    <img
                      src="/assets/img/logos/pcs-logo-white.svg"
                      alt="prostate cancer canada-wide"
                    />
                  </div>
                </a>
                <div className="flex items-center mb-3 lg:mb-0">
                  {socialMedia.map(({ img, url }, i) => (
                    <div key={i} className="mr-3 last:mr-0">
                      <a href={url} target="_blank">
                        <img src={`/assets/img/icons/${img}`} alt={img} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap basis-full lg:basis-5/12 px-10 justify-center mb-10 lg:mb-0">
              <div className="">
                <p className="mb-5 text-center lg:text-left font-bold text-2xl max-w-[360px]">
                  Your source for prostate cancer information and support
                </p>

                <ul className="flex list-disc list-inside  mb-5 font-bold">
                  <li className=" mr-10">Support</li>
                  <li className=" mr-10">Awareness</li>
                  <li className="">Research</li>
                </ul>

                <SubscribForm />
              </div>
            </div>

            <div className="basis-full lg:basis-3/12 flex justify-center lg:justify-end text-center lg:text-left px-10">
              <div className="">
                <div className="mb-10 text-2xl font-bold">Contact</div>
                <div className="mb-5">
                  {contact.map(({ title, value, href }, i) => (
                    <p key={i}>
                      <span>{title + ". "}</span>
                      <a href={`${href}:${value}`}>{value}</a>
                    </p>
                  ))}
                </div>
                <a href={googleMap} target="_blank">
                  {/* <p dangerouslySetInnerHTML={{ __html: address }}></p> */}{" "}
                  <span>{street}.,</span>
                  <br />
                  <span>{`${city} ${province} ${postalCode}`}</span>
                  <br />
                  <span>{country}</span>
                </a>
              </div>
            </div>

            <div className="basis-full"></div>
          </div>
        </div>
      </section>

      <section className="bg-blue text-white py-5 px-[22px]">
        <div className="container">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Prostate Cancer Foundation BC.
            Charity #87105-7840 RR0001
          </p>
        </div>
      </section>
    </footer>
  );
};

export default SiteFooter;
