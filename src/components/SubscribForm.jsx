import { useState } from "react";

import PrimaryBtn from "./bttons/PrimaryBtn";
import LoadingPing from "./loaders/LoadingPing";
import ThankYouModal from "./ThankYouModal";

const SubscribForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState();

  const thankyouProps = { show, setShow };

  const subscribeHandler = async (ev) => {
    ev.preventDefault();
    setErrors(null);
    setSubmitting(true);

    const apiEndpoint =
      import.meta.env.VITE_APP_API_BASE_URL +
      "/wp-json/contact-form-7/v1/contact-forms/705/feedback";

    const formData = new FormData(ev.target);

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
  };

  return (
    <form onSubmit={subscribeHandler}>
      <div className="text-center lg:text-left items-center">
        <p className="lg:mr-5 mb-3 font-bold">Stay in Touch with PCFBC</p>

        <div className="">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="basis-full md:basis-1/2 mb-3 xl:mb-0 px-3">
              <input
                className="w-full"
                type="text"
                name="first_name"
                placeholder="First Name*"
                required
              />
            </div>

            <div className="basis-full md:basis-1/2 px-3">
              <input
                className="w-full"
                type="text"
                name="last_name"
                placeholder="Last Name*"
                required
              />
            </div>
          </div>

          <input
            className="w-full mb-3"
            type="email*"
            name="email"
            placeholder="Email Address*"
            required
          />

          <div>
            {!submitting ? (
              <PrimaryBtn className="btn-main px-10 mb-3 xl:mb-0" type="submit">
                Submit
              </PrimaryBtn>
            ) : (
              <LoadingPing />
            )}
          </div>
        </div>
      </div>

      <ThankYouModal {...thankyouProps}>
        <p className="text-darkBlue text-center max-w-[300px] mx-auto">
          You’ve been successfully added to the list to receive updates from us.
        </p>
      </ThankYouModal>
    </form>
  );
};

export default SubscribForm;
