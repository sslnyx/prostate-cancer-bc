import PageTitle from "../../components/PageTitle";
import PeerSupportForm from "./PeerSupportForm";

const PeerSupport = () => {
  return (
    <div>
      <PageTitle
        p1="Peer Support"
        p2="One on One"
        className="title-light"
        description="
        <p>There’s a lot to navigate throughout your journey with prostate
        cancer and sometimes, reading and watching videos isn’t enough to
        get the answers you need. Maybe a support group setting feels too
        intimidating. If you’re hoping to just have an informal,
        confidential chat with another prostate cancer patient or partner,
        we can set that up.</p><p>Our peer support program pairs patients or their partners with volunteers from our prostate cancer community for a ‘One on One’ chat.</p>"
      />

      <section className="py-5 md:py-14">
        <div className="container flex justify-center">
          <div className="max-w-[750px]">
            <p>
              Our peer navigators will not provide you with any medical advice,
              but can serve as a listening ear, share about their experiences,
              and point you in the direction of helpful resources.
            </p>
            <p>
              Submit the form below to book a One on One today. Please note that
              your information will be kept confidential and will only be used
              for the purposes of pairing you with a peer navigator and to
              provide your peer navigator with background on your journey.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <PeerSupportForm />
        </div>
      </section>
    </div>
  );
};

export default PeerSupport;
