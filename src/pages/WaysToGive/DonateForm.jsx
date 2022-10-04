import { useState, useRef, useEffect } from "react";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import DonateFieldGroup from "./DonateFieldGroup";
import DonateInput from "./DonateInput";
import ErrorMessage from "./ErrorMessage";
import { checkCreditCard, financial } from "../../util/util";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import GiftForm from "./GiftForm";
import { useNavigate, useOutletContext } from "react-router-dom";
import LoadingDrops from "../../components/loaders/LoadingDrops";
import LoadingPing from "../../components/loaders/LoadingPing";

const DonateForm = ({ donationType, step, setStep }) => {
  const { setMonerisResponse, localData } = useOutletContext();
  const [loading, setLoading] = useState(false);

  const contactFields = [
    {
      nameId: "b_fname",
      label: "First Name:*",
    },
    {
      nameId: "b_lname",
      label: "Last Name:*",
    },
    {
      nameId: "b_add",
      label: "Address:*",
    },
    {
      nameId: "b_city",
      label: "City:*",
    },
    {
      nameId: "b_prov",
      label: "Province / State:*",
    },
    {
      nameId: "b_country",
      label: "Country:*",
    },
    {
      nameId: "b_pcode",
      label: "Postal Code / Zip:*",
    },
    {
      nameId: "b_tel",
      label: "Telephone:",
    },
    {
      nameId: "b_email",
      label: "Email:*",
    },
  ];

  const giftChoice = [
    {
      label: "Gift to the Foundation",
      id: "gitToTheFoundation",
    },
    {
      label: "Gift in Memoriam",
      id: "giftInMemoriam",
    },
    {
      label: "Gift in Honour",
      id: "giftInHonour",
    },
  ];

  const [errors, setErrors] = useState({});
  const requiredFields = useRef({});
  const requiredFieldsStep2 = useRef({});
  const requiredGiftFields = useRef({});
  const [giftTo, setGiftTo] = useState("Gift to the Foundation");
  const [showSubmit, setShowSubmit] = useState(false);

  const validateAll = () => {
    let fields = null;

    step === 0
      ? (fields = requiredFields.current)
      : step === 1
      ? (fields = requiredFieldsStep2.current)
      : step === 2 && requiredGiftFields.current
      ? (fields = requiredGiftFields.current)
      : "";

    // console.log(fields);

    const currentErrors = {};

    if (step === 0) {
      const cardResult = checkCreditCard(fields.card_number.value);

      // console.log(cardResult)
      if (!cardResult.success) {
        currentErrors.card_number = cardResult.message;
      }

      !fields.selectAmount.value &&
        !fields.otherAmount.value &&
        (currentErrors.amount = "Please select or input amount");
    }

    Object.entries(fields).forEach(([key, el]) => {
      // console.log(key);
      if (!el?.value && key !== "selectAmount" && key !== "otherAmount")
        currentErrors[key] = "This field is required";
    });

    setErrors(currentErrors);

    for (const val of Object.values(currentErrors)) {
      if (val) return false;
    }

    return true;
  };

  const validate = (id) => {
    let fields = null;
    step === 0
      ? (fields = requiredFields.current)
      : step === 1
      ? (fields = requiredFieldsStep2.current)
      : step === 2
      ? (fields = requiredGiftFields.current)
      : "";

    const currentErrors = {};
    const message = "This field is required";

    if (id === "selectAmount" || id === "otherAmount") {
      !fields[id].value || fields[id].value < 0.01
        ? (currentErrors.amount = "Please select or input amount")
        : (currentErrors.amount = null);
    } else {
      !fields[id]?.value
        ? (currentErrors[id] = message)
        : (currentErrors[id] = null);
    }

    const currentItem = {};

    if (id === "selectAmount") currentItem.otherAmount = "";
    if (id === "otherAmount") currentItem.selectAmount = "";

    console.log(id);
    currentItem[id] = fields[id]?.value;
    const currentData = JSON.parse(localStorage.getItem("pcfFormData"));

    localStorage.setItem(
      "pcfFormData",
      JSON.stringify({ ...currentData, ...currentItem })
    );

    setErrors({ ...errors, ...currentErrors });

    // console.log(currentErrors)

    // console.log({ ...errors, ...currentErrors });
  };

  const nextHandler = () => {
    const readyForNext = validateAll();
    console.log(readyForNext);
    console.log(errors);
    if (readyForNext) setStep(step + 1);
  };

  const navigate = useNavigate();

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    const isReady = validateAll();
    const formData = new FormData(ev.target);

    const amount = requiredFields.current.selectAmount.value
      ? requiredFields.current.selectAmount.value
      : requiredFields.current.otherAmount.value;

    const expiryDate =
      requiredFields.current.expiryMonth.value +
      requiredFields.current.expiryYear.value.slice(2);

    formData.append("donation_amount", financial(amount));
    formData.append("card_exp", expiryDate);
    formData.append("donation_type", donationType);

    if (isReady) {
      try {
        const res = await fetch(
          "https://donation.prostatecancerbc.ca/api/donate",
          {
            method: "POST",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
            body: formData,
          }
        );

        const resData = await res.json();
        setLoading(false);

        // setMonerisResponse(resData);
        // resData.donorName =
        //   formData.get("b_fname") + " " + formData.get("b_lname");
        // resData.donorAddress = formData.get("b_add");
        // resData.donorCity = formData.get("b_city");
        // resData.donorCountry = formData.get("b_country");
        // resData.donorProvince = formData.get("b_prov");
        // resData.donorPostalCode = formData.get("b_pcode");

        if (resData?.errors) {
          if (Object.keys(resData.errors).includes("b_email")) {
            setErrors({ b_email: "The email must be a valid email address." });
            setStep(1);
          } else {
            navigate("/ways-to-give/submission-error");
          }
          return;
        }

        const approved = parseInt(resData.ResponseCode) <= 29;
        localStorage.setItem("pcfApprovedData", JSON.stringify(resData));
        // console.log(resData);

        if (approved) navigate("/ways-to-give/thank-you");
        if (!approved) navigate("/ways-to-give/payment-error");
      } catch (errors) {
        console.log(errors);
      }
    }
  };

  useEffect(() => {
    // console.log(giftTo)
    giftTo === "Gift to the Foundation" && (requiredGiftFields.current = {});
  }, [giftTo]);

  useEffect(() => {
    setShowSubmit(false);
    if (step === 2) {
      setTimeout(() => {
        setShowSubmit(true);
      }, 1000);
    }
  }, [step]);

  return (
    <form onSubmit={submitHandler}>
      <div className={step === 0 ? "block" : "hidden"}>
        <div className="flex flex-wrap py-1 mb-5">
          <div className="basis-full md:basis-4/12">
            I wish to make a donation of (CAD):*
          </div>

          <div className="md:flex-1"></div>

          <div className="basis-full relative md:basis-8/12 flex flex-wrap md:flex-nowrap justify-between">
            <select
              onChange={() => {
                requiredFields.current.otherAmount.value = "";
                validate("selectAmount");
              }}
              className="border px-3 border-black w-full md:w-[270px] max-w-full"
              defaultValue={localData?.selectAmount}
              ref={(el) => (requiredFields.current.selectAmount = el)}
            >
              <option value="">Please Select</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
            </select>

            <div className="flex flex-col md:flex-row w-full md:w-auto">
              <div className="mt-3 md:m-0 md:mx-3">Or $</div>
              <input
                type="number"
                onChange={() => {
                  requiredFields.current.selectAmount.value = "";
                  validate("otherAmount");
                }}
                step="any"
                ref={(el) => (requiredFields.current.otherAmount = el)}
                min={0}
                defaultValue={localData?.otherAmount}
                className="border border-darkBlue placeholder:text-black px-3 w-full md:w-[270px] max-w-full"
                placeholder="other CAD"
              />
            </div>

            <ErrorMessage error={errors?.amount} />
          </div>
        </div>

        <div className="flex flex-wrap py-1 mb-5">
          <span className="basis-full md:basis-4/12">
            Please direct my Donation towards:{" "}
          </span>
          <div className="basis-full md:basis-8/12">
            <select
              className="border px-3 border-black w-full md:w-[270px] max-w-full"
              name="donation_area"
              defaultValue=""
            >
              <option value="">Please Select</option>
              <option value="Area of greatest need">
                Area of greatest need
              </option>
              <option value="Research">Research</option>
              <option value="Support">Support</option>
              <option value="Awareness">Awareness</option>
              <option value="Ride to Live">Ride to Live</option>
              <option value="Fathers Day Walk / Run">
                Fathers Day Walk / Run
              </option>
              <option value="Butts in a Boat">Butts in a Boat</option>
            </select>
          </div>
        </div>

        <div className="flex items-center py-1 mb-5">
          <div className="mr-3">We accept:</div>{" "}
          <img
            className="w-[150px]"
            src="/assets/img/icons/credit-cards.jpeg"
            alt=""
          />
        </div>

        <DonateFieldGroup label="Card Number:*">
          <DonateInput
            name="card_number"
            type="text"
            defaultValue={localData?.card_number}
            ref={(el) => (requiredFields.current.card_number = el)}
            onChange={() => validate("card_number")}
          />
          <ErrorMessage error={errors?.card_number} />
        </DonateFieldGroup>

        <DonateFieldGroup label="Cardholder Name:*">
          <DonateInput
            name="card_name"
            type="text"
            required
            defaultValue={localData?.card_name}
            onChange={() => validate("card_name")}
            ref={(el) => (requiredFields.current.card_name = el)}
          />
          <ErrorMessage error={errors?.card_name} />
        </DonateFieldGroup>

        <DonateFieldGroup label="Expiry Date:*">
          <div className="flex -mx-3">
            <div className="w-[100px] px-3">
              <select
                name=""
                defaultValue={localData ? localData.expiryMonth : ""}
                className="border border-black w-full"
                onChange={() => validate("expiryMonth")}
                ref={(el) => (requiredFields.current.expiryMonth = el)}
              >
                <option value="" disabled>
                  MM
                </option>
                {new Array(12).fill(1).map((mm, i) => (
                  <option key={i}>
                    {mm + i < 10 ? "0" + (mm + i) : mm + i}
                  </option>
                ))}
              </select>
            </div>

            <span> / </span>

            <div className="w-[100px] px-3">
              <select
                defaultValue={localData ? localData.expiryYear : ""}
                className="border border-black w-full"
                name=""
                onChange={() => validate("expiryYear")}
                ref={(el) => (requiredFields.current.expiryYear = el)}
              >
                <option value="" disabled>
                  YY
                </option>
                {new Array(10).fill(new Date().getFullYear()).map((year, i) => (
                  <option key={i} value={year + i}>
                    {year + i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ErrorMessage error={errors?.expiryMonth || errors?.expiryYear} />
        </DonateFieldGroup>

        {donationType === "preauth" && (
          <div className="py-10">
            <p className="max-w-[700px] mx-auto">
              For our monthly giving program, please note that your credit card
              will be billed the amount specified above, on the 15th of each
              month. Tax receipts for monthly donations will be issued by
              February 28th of the following year.
            </p>
          </div>
        )}
      </div>

      <div className={step === 1 ? "block" : "hidden"}>
        {contactFields.map(({ nameId, label }) => (
          <div key={nameId}>
            <DonateFieldGroup label={label}>
              <DonateInput
                name={nameId}
                type="text"
                defaultValue={localData && localData[nameId]}
                onChange={() => {
                  if (nameId !== "telephone") validate(nameId);
                }}
                ref={(el) => {
                  if (nameId !== "telephone")
                    requiredFieldsStep2.current[nameId] = el;
                }}
              />
              <ErrorMessage error={errors[nameId]} />
            </DonateFieldGroup>
          </div>
        ))}

        <div className="flex -mx-3">
          <span className="basis-full md:basis-4/12 px-3">
            (To receive tax receipt if applicable)
          </span>
          <label className="basis-full md:basis-8/12 px-3">
            <input
              type="checkbox"
              name="information"
              className="mr-3"
              defaultChecked
            />
            Subscribe to our Mailing List to receive updates from the Foundation
            from time to time.
          </label>
        </div>
      </div>

      <div className={step === 2 ? "block" : "hidden"}>
        <Row className="mb-10">
          <Col w={4}>
            <div className="w-full h-full">
              <h2 className="text-blue">Is this gift a:</h2>
            </div>
          </Col>
          <Col w={8}>
            <div className="w-full flex flex-col">
              {giftChoice.map(({ label, id }) => (
                <label key={id}>
                  <input
                    defaultChecked={id === "gitToTheFoundation" && true}
                    onChange={(ev) => setGiftTo(ev.target.value)}
                    type="radio"
                    value={label}
                    name="memoriam"
                    className="mr-3 mb-5"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </Col>
        </Row>

        {giftTo !== "Gift to the Foundation" && (
          <GiftForm
            giftTo={giftTo}
            ref={requiredGiftFields}
            validate={validate}
            errors={errors}
          />
        )}

        <div className="bg-blue py-11 px-[22px] mb-10">
          <Row>
            <Col w={4}>
              <div className="w-full h-full text-white">
                For office admin use only:
              </div>
            </Col>
            <Col w={8}>
              <textarea
                className="w-full p-3"
                name="adminUse"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </Col>
          </Row>
        </div>
      </div>

      <div className="mb-10"></div>

      <div className="flex justify-between">
        {step > 0 ? (
          <PrimaryBtn className="btn-main" onClick={() => setStep(step - 1)}>
            back
          </PrimaryBtn>
        ) : (
          <div className="flex-1"></div>
        )}

        {step !== 2 ? (
          <PrimaryBtn className="btn-main" onClick={nextHandler}>
            Next
          </PrimaryBtn>
        ) : (
          <>
            {loading ? (
              <LoadingPing />
            ) : (
              <PrimaryBtn
                type="submit"
                className={`btn-main ${
                  showSubmit
                    ? ""
                    : "bg-gray-300 border-gray-300 pointer-events-none"
                }`}
              >
                Submit
              </PrimaryBtn>
            )}
          </>
        )}
      </div>
    </form>
  );
};

export default DonateForm;
