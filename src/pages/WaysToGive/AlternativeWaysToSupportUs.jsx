// import PageHero from "../../components/PageHero"
import PageTitle from "../../components/PageTitle";
import WaysBox from "./WaysBox";
import { Link } from "react-router-dom";

const AlternativeWaysToSupportUs = () => {
  return (
    <div>
      <PageTitle
        p1={"Alternative Ways to"}
        p2="Support Us"
        className="title-light"
        description="You don't have to make a traditional donation to support us. Here are some other ways you can support patients and their loved ones affected by the most common cancer in Canadian men. "
      />

      <section>
        <div className="container !max-w-[1000px] link-blue">
          <WaysBox title="Host a 3<sup>rd</sup> party event">
            <p>
              Want to throw your own bake sale, pub event, golf tournament, or
              other fundraiser to support Prostate Cancer Foundation BC? Get in
              touch with{" "}
              <a href="mailto:nicole@prostatecancerbc.ca">our Event Manager</a>{" "}
              for more information.
            </p>
          </WaysBox>
          <WaysBox title="Donate publicly traded securities">
            <p>
              A gift of publicly-traded securities, such as stocks, bonds or
              mutual funds, can be made to the Foundation. For more information,
              please <a target="_blank" href="/assets/pdfs/PCFBC_publicly-traded-securities-to-pcfbc-updated-dec-2020-merged.pdf">click here</a>.
            </p>
          </WaysBox>
          <WaysBox title="Donate a car">
            <p>
              Donate A Car Canada accepts vehicle donations for Prostate Cancer
              Foundation BC. To donate a car, truck, RV, boat, motorcycle or
              other vehicle to PCFBC, simply fill out the DONATE NOW tab at{" "}
              <a href="https://www.donatecar.ca" target="_blank">
                www.donatecar.ca
              </a>
            </p>
            <p>
              Donate A Car Canada can provide you with free towing in many areas
              across Canada. Donate a Car Canada can pick up your car or truck,
              or you can drop off your vehicle to maximize your donation. When
              you donate your car it will either be recycled or sold at auction
              depending on its condition, age and location. Donate A Car Canada
              will look after everything to make your donation easy for you to
              support Prostate Cancer Foundation BC.
            </p>

            <p>
              DONATE NOW at{" "}
              <a href="https://www.donatecar.ca" target="_blank">
                www.donatecar.ca
              </a>{" "}
              and PCFBC will send you a tax receipt after your car donation is
              complete!
            </p>
          </WaysBox>
          <WaysBox title="Contribute to our Endowment fund">
            <p>
              Make a donation to the Foundation's endowment fund to help us make
              all donations go further. Please <a href="/about-us/contact-us">contact us</a> to learn more.
            </p>
          </WaysBox>
          <WaysBox title="Consider Legacy giving">
            <div className="mb-5">
              <p className="text-blue font-bold">What's your Legacy?</p>

              <p>We think there are two times you can create your Legacy:</p>
            </div>

            <div>
              <ul className="list-decimal pl-4 text-blue font-bold">
                <li className="mb-5">
                  Now.
                  <p className="text-black font-[300]">
                    By 'Now' we mean that you create a Legacy with Prostate
                    Cancer Foundation BC that you can see the benefits of and
                    enjoy… Now! We'll work with you to find the right project
                    that can be your Legacy… a Legacy you see the results of
                    every day! A Legacy that will make you proud and happy
                    because you can see its benefits… today!{" "}
                    <a href="tel:604-574-4012">Call us</a> and let's start
                    making your legacy happen now.
                  </p>
                </li>

                <li>
                  Later.
                  <p className="text-black font-[300]">
                    Yes you can create some of your Legacies that all of us at
                    Prostate Cancer Foundation BC will thank you for when we
                    wish you a final goodbye. Here's how:
                  </p>
                  <ul className="text-black list-disc pl-5 font-[300]">
                    <li>
                      Prepare a will. Without a will you lose control over your
                      property at death.
                    </li>
                    <li>Leave a gift in your will.</li>
                    <li>
                      Leave a gift of a specific dollar amount or a percentage
                      of the assets in your will.
                    </li>
                    <li>Consider using assets for your charitable gift.</li>
                    <li>
                      Name Prostate Cancer Foundation BC as the beneficiary of
                      an existing or paid-up life insurance policy.
                    </li>
                    <li>
                      Name Prostate Cancer Foundation BC as a beneficiary of
                      your RRSP, RRIF or pension.
                    </li>
                    <li>Remember loved ones with memorial gifts.</li>
                    <li>
                      Encourage family and friends to leave gifts in their will.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mb-5"></div>
              <p>
                So, it's your choice: Now or Later. Give us a{" "}
                <a href="tel:604-574-4012">call</a> and let us help put a Legacy
                Smile on your face!
              </p>
              <p>
                Note: To leave a tax deductible donation, gift or legacy to your
                'Local Support Group" make the donation to Prostate Cancer
                Foundation BC requesting that the funds be used to support the
                needs of your group. The Foundation will monitor how and on what
                the funds are spent and forward a tax receipt to you.
              </p>
              <p>
                For other options to support Prostate Cancer Foundation BC,
                please contact our office:{" "} <br className="hidden md:block" />
                <a href="tel:604-574-4012">604-574-4012</a> or{" "}
                <a href="mailto:info@prostatecancerbc.ca">
                  info@prostatecancerbc.ca
                </a>{" "}
                .
              </p>
            </div>
          </WaysBox>

          <WaysBox title="Support a Research Grant">
            <p>
              Provide a donation (minimum $35,000) and a research grant can be
              named in your honour. Please <a href="/about-us/contact-us">contact us</a> to learn more.
            </p>
          </WaysBox>

          <WaysBox title="Become a corporate sponsor">
            <p>
              Please contact{" "}
              <Link to="/about-us/contact-us">
                Prostate Cancer Foundation BC
              </Link>{" "}
              for more information about becoming a corporate sponsor.
            </p>
          </WaysBox>
        </div>
      </section>
    </div>
  );
};

export default AlternativeWaysToSupportUs;
