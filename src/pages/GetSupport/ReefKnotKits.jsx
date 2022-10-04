import PageTitle from "../../components/PageTitle";
import ReefKnotKitsForm from "./ReefKnotKitsForm";

const ReefKnotKits = () => {
  return (
    <div>
      <PageTitle
        p1="FREE INFOMATION PACKAGES"
        p2="REEF KNOT KITS"
        className="title-light"
        description="Our signature Reef Knot Kits include a multitude of resources to aid you in researching your diagnosis and making difficult decisions surrounding your treatment options. Only when you know what is best for you and your family can you make an informed decision."
      />

      <section>
        <div className="container">
          <h3 className="text-4xl text-center mb-10">
            A free kit with everything you need to
            <br className="hidden md:block" /> know about prostate cancer
          </h3>

          <div className="flex flex-row flex-wrap items-center -mx-10">
            <div className="basis-full md:basis-4/12 order-2 md:order-1 px-10">
              <div className="py-10">
                <p>
                  Our Reef Knot Kit information packages are free to prostate
                  cancer patients, their loved ones, and health care providers’
                  offices anywhere in Canada.
                </p>
                <p>
                  Each Reef Knot Kit includes important resources to aid you in
                  understanding your diagnosis, making difficult decisions
                  surrounding your treatment options, and improving your quality
                  of life with your cancer. We encourage anyone going through
                  this journey to take the time to learn more about prostate
                  cancer and take advantage of the resources provided in these
                  kits.
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-8/12 order-1 md:order-2 px-10">
              <img src="/assets/img/get-support/reef-knot-kits/rkk-1.jpeg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h3 className="text-4xl text-center mb-10">
            Why is it called a ‘Reef Knot Kit’?{" "}
          </h3>
          <div className="flex flex-wrap items-center -mx-10">
            <div className="basis-full md:basis-8/12 px-10">
              <img src="/assets/img/get-support/reef-knot-kits/rkk-2.jpeg" />
            </div>
            <div className="basis-full md:basis-4/12 px-10">
              <div>
                <p className="py-10">
                  The Reef Knot is representative of strength, unity, and
                  courage. Since the inception of our Reef Knot Information Kit
                  Program in 2002, thousands of kits have been distributed
                  throughout Canada promoting prostate cancer awareness and
                  survivorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h3 className="text-4xl text-center mb-10">
            SIGN UP for your free kit
          </h3>
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <p>
                Simply fill out the form below for free shipping anywhere in
                Canada.
              </p>
              <p>
                Alternatively, email your request to{" "}
                <a
                  className="underline text-blue"
                  href="mailto:shelley@prostatecancerbc.ca"
                >
                  shelley@prostatecancerbc.ca
                </a>{" "}
                or call{" "}
                <a className="underline text-blue" href="tel:604-574-4012">
                  604-574-4012
                </a>
                , and leave your name, address, telephone and email address.
              </p>
              <p>
                Please note that kits are mailed out on Wednesdays. Please allow
                1 week shipping time within BC and 2 weeks for the rest of
                Canada. We are unable to ship outside of Canada at this time.
              </p>
            </div>
          </div>

          <div className="mb-10"></div>

          <div>
            <div className="flex justify-end">
              <span>*required</span>
            </div>
            <ReefKnotKitsForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReefKnotKits;
