import { useRef, useState } from "react";
import Input from "../../components/form-inputs/Input";
import Select from "../../components/form-inputs/Select";
import Accordion from "../../components/Accordion";
import { useOutletContext } from "react-router-dom";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import { toSnakeCase2 } from "../../util/util";
import LoadingPing from "../../components/loaders/LoadingPing";
import ThankYouModal from "../../components/ThankYouModal";

const PeerSupportForm = () => {
  const topics = useRef({});

  const [showTY, setShowTY] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    peer_support: { form_accordion },
  } = useOutletContext();

  const preferred_contact = {
    placeholder: "PREFERRED METHOD OF CONTACT",
    name: "preferred_contact",
    options: ["Email", "Phone"],
  };

  const best_time_to_contact = {
    placeholder: "BEST TIME TO CONTACT",
    name: "best_time_to_contact",
    options: ["AM", "PM", "ANYTIME"],
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);

    const formData = new FormData(ev.target);

    // console.log(topics.current);

    const selectedObj = {};

    for (const [title, mainVal] of Object.entries(topics.current)) {
      // console.log(toSnakeCase2(title));

      if (mainVal?.checked) formData.set(toSnakeCase2(title), title);

      for (const [main, subVal] of Object.entries(mainVal)) {
        if (subVal.sub) {
          for (const [sub, options] of Object.entries(subVal)) {
            if (!selectedObj[main]) selectedObj[main] = [];
            if (options?.dom?.checked) selectedObj[main].push(sub);
          }
        }

        // console.log(subVal)
        if (subVal.checked)
          formData.set(toSnakeCase2(main) + "_main", subVal?.dom.value);

        if (subVal.sub)
          formData.set(
            toSnakeCase2(main),
            selectedObj[main].length
              ? "Sub Topics: " + selectedObj[main].join(", ")
              : ""
          );
      }
    }

    // console.log(selectedObj)

    try {
      const apiEndpoint =
        import.meta.env.VITE_APP_API_BASE_URL +
        "/wp-json/contact-form-7/v1/contact-forms/702/feedback";

      // console.log(Object.fromEntries(formData));

      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();
      setSubmitting(false);

      if (res.ok && resData.status === "mail_sent") {
        setShowTY(true);
      }
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <form onSubmit={submitHandler} className="one-on-one-form">
      <div className="-mx-2 md:-mx-10">
        <div className="flex">
          <Input
            placeholder="FIRST NAME*"
            type="text"
            name="first_name"
            required
          />
          <Input
            placeholder="LAST NAME*"
            type="text"
            name="last_name"
            required
          />
        </div>
        <div className="flex">
          <Input placeholder="EMAIL*" type="email" name="email" required />
          <Input placeholder="BEST CONTACT NUMBER" type="phone" name="phone" />
        </div>
        <div className="flex">
          <Input placeholder="CITY" type="text" name="city" />
          <Input placeholder="PROVINCE" type="text" name="province" />
        </div>
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2">
            <Select {...preferred_contact} />
          </div>
          <div className="basis-full md:basis-1/2">
            <Select {...best_time_to_contact} />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2">
            <Input
              placeholder="APPROXIMATE DATE OF DIAGNOSIS"
              type="text"
              name="date_of_diagnosis"
            />
          </div>
          <div className="basis-full md:basis-1/2">
            <Input
              placeholder="APPROXIMATE AGE AT DIAGNOSIS"
              type="text"
              name="age_at_diagnosis"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="basis-full md:basis-1/2">
          <p>
            Select your top 1-3 topics that you are most interested in
            discussing with a peer navigator:
          </p>

          <Accordion data={form_accordion} type="form" ref={topics} />
        </div>

        {/* <div className="basis-full md:basis-1/2 px-10"></div> */}
      </div>

      <div className="flex justify-center">
        {submitting ? (
          <LoadingPing />
        ) : (
          <PrimaryBtn type="submit" className="btn-main">
            Submit
          </PrimaryBtn>
        )}
      </div>

      <ThankYouModal show={showTY} setShow={setShowTY}>
        <div className="link-blue text-center py-5">
          <p>
            Your request for a One-on-One session has been received. <br /> We
            will connect with you shortly with the appointment details. If you
            have any questions in the meantime, please contact{" "}
            <a href="mailto:info@prostatecancerbc.ca">
              info@prostatecancerbc.ca
            </a>{" "}
            or simply call <a href="tel:604.574.4012">604.574.4012</a>.
          </p>
        </div>
      </ThankYouModal>
    </form>
  );
};

export default PeerSupportForm;
