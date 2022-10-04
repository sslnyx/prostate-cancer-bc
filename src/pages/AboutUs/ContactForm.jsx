import { useState } from "react";
import Input from "../../components/form-inputs/Input";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import LoadingPing from "../../components/loaders/LoadingPing";
import ThankYouModal from "../../components/ThankYouModal";

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);
  
  const tkProps = {
    show,
    setShow,
  };

  const submiHandler = async (ev) => {
    ev.preventDefault();
    setErrors(null);
    setSubmitting(true);

    const apiEndpoint =
      import.meta.env.VITE_APP_API_BASE_URL +
      "/wp-json/contact-form-7/v1/contact-forms/704/feedback";

    const formData = new FormData(ev.target);

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();
      setSubmitting(false);
      // console.log(resData);

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
    <div>
      <div className="flex justify-end mb-5">
        <div>* required</div>
      </div>
      <form onSubmit={submiHandler}>
        <div className="flex -mx-2 md:-mx-10">
          <Input placeholder="Name*" required name="full_name" />
          <Input placeholder="Email*" required name="email" />
        </div>
        <div className="flex -mx-2 md:-mx-10">
          <Input
            placeholder="Phone"
            name="phone"
            setErrors={setErrors}
            error={errors?.find(({ field }) => field === "phone")}
          />
          <Input placeholder="Subject*" required name="subject" />
        </div>

        <div className="mb-10">
          <textarea
            name="message"
            className="border p-3 border-1 border-darkBlue w-full"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex justify-center">
          {!submitting ? (
            <PrimaryBtn className="btn-main" type="submit">
              Submit
            </PrimaryBtn>
          ) : (
            <LoadingPing />
          )}
        </div>
      </form>

      <ThankYouModal {...tkProps}>
        <div className="text-center">
          <p>
            Thanks for your interest in PCFBC. <br /> We will get back to you
            shortly on your inquiry.
          </p>
        </div>
      </ThankYouModal>
    </div>
  );
};

export default ContactForm;
