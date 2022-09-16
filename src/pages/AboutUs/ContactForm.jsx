import React from "react";
import Input from "../../components/form-inputs/Input";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const ContactForm = () => {
  return (
    <div>
      <div className="flex justify-end mb-5">
        <div>* required</div>
      </div>
      <form>
        <div className="flex -mx-10">
          <Input placeholder="Name*" />
          <Input placeholder="Email*" />
        </div>
        <div className="flex -mx-10">
          <Input placeholder="Phone*" />
          <Input placeholder="Subject*" />
        </div>

        <div className="mb-10">
          <textarea
            name=""
            className="border p-3 border-1 border-darkBlue w-full"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn className="btn-main">Submit</PrimaryBtn>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
