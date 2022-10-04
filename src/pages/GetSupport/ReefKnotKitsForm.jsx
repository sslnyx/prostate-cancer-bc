import { useState } from "react";
import Input from "../../components/form-inputs/Input";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import LoadingPing from "../../components/loaders/LoadingPing";
import ThankYouModal from "../../components/ThankYouModal";

const ReefKnotKitsForm = () => {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const orderingFor = [
    "Myself, a newly diagnosed patient",
    "Myself, a patient treated for and living with prostate cancer",
    "A friend or family member with prostate cancer",
    "My support group",
    "Physician / medical professional’s office",
    "Other support program",
  ];

  const props = { show, setShow };

  const submiHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    const formData = new FormData(ev.target);

    formData.get("kit_in_french") === "on"
      ? formData.set("kit_in_french", "Yes")
      : formData.set("kit_in_french", "No");

    formData.get("plan_for_prostate_removal_surgery") === "on"
      ? formData.set("plan_for_prostate_removal_surgery", "Yes")
      : formData.set("plan_for_prostate_removal_surgery", "No");

    const apiEndpoint =
      import.meta.env.VITE_APP_API_BASE_URL +
      "/wp-json/contact-form-7/v1/contact-forms/291/feedback";

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });
      console.log(res);

      const resData = await res.json();

      if (res.ok && resData.status === "mail_sent") {
        setSubmitting(false);
        setShow(true);
      }
      console.log(resData);
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <form onSubmit={submiHandler} className="-mx-2 md:-mx-10">
      <div className="flex">
        <Input type="text" placeholder="FIRST NAME*" name="rkfname" required />
        <Input type="text" placeholder="LAST NAME*" name="rklname" required />
      </div>

      <div className="flex">
        <Input type="text" placeholder="ADDRESS*" name="rkadd" required />
        <Input type="text" placeholder="CITY*" name="rkcity" required />
      </div>

      <div className="flex">
        <Input
          type="text"
          placeholder="PROVINCE / STATE*"
          name="rkprov"
          required
        />
        <Input
          type="text"
          placeholder="POSTAL CODE / ZIP*"
          name="rkpcode"
          required
        />
      </div>

      <div className="flex flex-wrap">
        <div className="basis-1/2">
          <Input type="phone" placeholder="TELEPHONE" name="rktel" />
        </div>
        <div className="basis-1/2">
          <Input type="email" placeholder="EMAIL*" name="rkemail" required />
        </div>
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="flex flex-wrap justify-between basis-full md:basis-1/2 px-2 md:px-10 items-center mb-3 md:mb-0">
          <span className="basis-full md:basis-1/2">
            QUANTITY OF KITS REQUIRED*
          </span>

          <select
            className="border border-darkBlue basis-full md:basis-1/2 px-3 py-1"
            name="rkquant"
            defaultValue=""
            required
          >
            <option value="" disabled>
              PLEASE SELECT
            </option>
            <option>1</option>
            <option>10</option>
            <option>20</option>
            {/* <option>Other</option> */}
          </select>
        </div>

        <div className="flex justify-between flex-wrap basis-full md:basis-1/2 px-2 md:px-10 items-center">
          <span className="basis-full md:basis-1/2">
            WHO IS THIS ORDER FOR?
          </span>
          <div className="basis-full md:basis-1/2">
            <select
              className="border w-full border-darkBlue px-3 py-1"
              defaultValue=""
              name="rkwho"
            >
              <option value="" disabled>
                PLEASE SELECT
              </option>
              {orderingFor.map((val, i) => (
                <option key={i}>{val}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <label className="flex items-center px-2 md:px-10 mb-5">
        <input
          type="checkbox"
          name="plan_for_prostate_removal_surgery"
          required
          className="min-w-[30px] w-[30px] h-[30px] mr-3"
        />
        <span>
          Have you already had/plan to have a radical prostatectomy (prostate
          removal surgery)?*
        </span>
      </label>

      <label className="flex items-center px-2 md:px-10 mb-5">
        <input
          type="checkbox"
          name="kit_in_french"
          className="min-w-[30px] w-[30px] h-[30px] mr-3"
        />
        <span>Check this box to receive the Kit in French</span>
      </label>

      <div className="px-2 md:px-10 mb-10">
        <p>COMMENTS</p>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          className="border border-darkBlue w-full p-3"
        ></textarea>
      </div>

      <div className="flex justify-center">
        {!submitting ? (
          <PrimaryBtn type="submit" className="btn-main">
            SUBMIT
          </PrimaryBtn>
        ) : (
          <LoadingPing />
        )}
      </div>

      <ThankYouModal {...props}>
        <div className="link-blue text-center py-5">
          <p>
            Your request for Reef Knot Kit has been received. <br /> If you have
            any questions in the meantime, please contact{" "}
            <a href="mailto:shelley@prostatecancerbc.ca">
              shelley@prostatecancerbc.ca
            </a>{" "}
            or simply call <a href="tel:604.574.4012">604.574.4012</a>.
          </p>
        </div>
      </ThankYouModal>
    </form>
  );
};

export default ReefKnotKitsForm;
