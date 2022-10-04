import { forwardRef } from "react";
import { useOutletContext } from "react-router-dom";
import DonateFieldGroup from "./DonateFieldGroup";
import DonateInput from "./DonateInput";
import ErrorMessage from "./ErrorMessage";

const GiftForm = forwardRef(({ giftTo, validate, errors }, ref) => {
  const { localData } = useOutletContext();

  const giftInput = [
    {
      nameId: "h_title",
      label: "Honoree Title:",
    },
    {
      nameId: "h_fname",
      label: "Honoree First Name:*",
      required: true,
    },
    {
      nameId: "h_lname",
      label: "Honoree Last Name:*",
      required: true,
    },
    {
      nameId: "h_name",
      label: "Recipient Name For Sending The Card:",
      required: false,
    },
    {
      nameId: "h_add",
      label: "Mailing Address For Sending The Card:*",
      required: true,
    },
    {
      nameId: "h_city",
      label: "City / Town:*",
      required: true,
    },
    {
      nameId: "h_prov",
      label: "Province / State:*",
      required: true,
    },
    {
      nameId: "h_pcode",
      label: "Postal Code / Zip:*",
      required: true,
    },
    {
      nameId: "h_country",
      label: "COUNTRY:*",
      required: true,
    },
    {
      nameId: "h_sent_behalf",
      label: "Would You Like Us To Send The Card On Your Behalf?",
    },
    {
      nameId: "h_name_on_card",
      note: "If you wish to remain anonymous, please leave this field blank",
      label: "Sender Name For The Card: ",
    },
    {
      nameId: "h_message",
      label: "Personalize Your Card With The Following Message:",
      note: "up to 250 characters",
      type: "textarea",
    },
  ];

  const occasion = [
    "Anniversary",
    "Bar Mitzvah",
    "Bat Mitzvah",
    "Birthday",
    "Christmas",
    "Easter",
    "Father's Day",
    "Mother's Day",
    "Our Friendship",
    "Retirement",
    "Wedding",
    "Your Thoughtfulness",
    "No Occasion",
  ];

  return (
    <div className="mb-10">
      {giftTo === "Gift in Honour" && (
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="basis-full md:basis-4/12 px-3">
            Please Select the Occasion for this Gift:
          </div>
          <div className="basis-full md:basis-8/12 px-3">
            <select
              name="h_occasion"
              defaultValue=""
              className="border border-darkBlue w-full py-1 px-2"
            >
              <option value="">Please Select</option>
              {occasion.map((val, i) => (
                <option key={i}>{val}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {giftInput.map(({ label, nameId, note, type, required }, i) => (
        <div key={nameId}>
          <DonateFieldGroup label={label} note={note}>
            {type ? (
              <textarea
                name={nameId}
                cols="30"
                rows="4"
                className="border border-black w-full"
              />
            ) : (
              <DonateInput
                type="text"
                onChange={() => required && validate(nameId)}
                defaultValue={localData ? localData[nameId] : ""}
                ref={(el) => required && (ref.current[nameId] = el)}
                name={nameId}
              />
            )}
            <ErrorMessage error={errors[nameId]} />
          </DonateFieldGroup>
        </div>
      ))}
    </div>
  );
});

export default GiftForm;
