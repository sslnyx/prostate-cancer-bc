import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Input from "../../../components/form-inputs/Input";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";
import Checkbox from "../../../components/form-inputs/Checkbox";
import LoadingPing from "../../../components/loaders/LoadingPing";
import ThankYouModal from "../../../components/ThankYouModal";

const VolunteerForm = () => {
  // const events = useOutletContext();
  // const positions = ["Portrait photographer"];

  const [submitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(null);

  const thankyouProps = { show, setShow };
  const ref = useRef({});

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    setErrors(null);

    const apiEndpoint =
      import.meta.env.VITE_APP_API_BASE_URL +
      "/wp-json/contact-form-7/v1/contact-forms/706/feedback";

    const formData = new FormData(ev.target);
    const obj = {};

    for (const [key, val] of Object.entries(ref.current)) {
      const arr = [];
      for (const [key2, val2] of Object.entries(val)) {
        if (val2.checked) arr.push(val2.value);
      }
      formData.set(key, arr.join(", "));
    }

    // console.log(Object.fromEntries(formData));

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();
      setSubmitting(false);
      console.log(resData);

      if (res.ok && resData?.invalid_fields.length) {
        setErrors(resData?.invalid_fields);
        console.log(resData?.invalid_fields);
      }

      if (res.ok && resData.status === "mail_sent") {
        setShow(true);
      }
    } catch (errors) {
      console.log(errors);
    }

    // console.log(obj);
  };

  return (
    <div className="container">
      <div className="flex justify-end mb-3">
        <span>* required</span>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-row -mx-2 md:-mx-10">
          <Input type="text" name="full_name" placeholder="NAME*" required />

          <Input type="text" name="city" placeholder="CITY*" required />
        </div>

        <div className="flex flex-row -mx-2 md:-mx-10">
          <Input type="email" name="email" placeholder="EMAIL*" required />

          <Input type="text" name="province" placeholder="PROVINCE*" required />
        </div>

        <div className="flex flex-row -mx-2 md:-mx-10">
          <div className="basis-1/2">
            <Input
              type="phone"
              name="phone"
              placeholder="PHONE*"
              error={errors?.find(({ field }) => field === "phone")}
              required
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap -mx-2 md:-mx-10 mb-5">
          <div className="basis-full md:basis-1/2 px-2 md:px-10 mb-5">
            <div className="flex flex-col">
              <p>Specify what you would like to volunteer for</p>
              <Checkbox main name="volunteer_for" id="foundation" ref={ref}>
                Foundation
              </Checkbox>

              <Checkbox main name="volunteer_for" id="suppport_group" ref={ref}>
                Support Groups
              </Checkbox>
            </div>
          </div>

          <div className="basis-full md:basis-1/2 px-2 md:px-10">
            {/* <select
              name="events"
              className="w-full border border-darkBlue px-3 py-1 uppercase"
            >
              <option value="">EVENTS</option>
              {events.map(({ title }) => (
                <option>{title}</option>
              ))}
            </select> */}

            <div>
              <p>Events</p>
              <Checkbox main name="events" id="fathers_day" ref={ref}>
                The Father’s Day Walk / Run
              </Checkbox>
              <Checkbox main name="events" id="ride_to_live" ref={ref}>
                West Coast Ride to Live
              </Checkbox>
              <Checkbox main name="events" id="pars_for_prostate" ref={ref}>
                Pars for Prostate
              </Checkbox>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {!submitting ? (
            <PrimaryBtn type="submit" className="btn-main">
              submit
            </PrimaryBtn>
          ) : (
            <LoadingPing />
          )}
        </div>
      </form>

      <ThankYouModal {...thankyouProps}>
        <p className="text-center">
          Thanks for your interest in PCFBC. We will get back to you
          shortly on possible volunteer positions available.
        </p>
      </ThankYouModal>
    </div>
  );
};

export default VolunteerForm;
