import Input from "../../components/form-inputs/Input";
import Select from "../../components/form-inputs/Select";
import Accordion from "../../components/Accordion";
import { useOutletContext } from "react-router-dom";

const PeerSupportForm = () => {
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

  return (
    <form>
      <div className="-mx-2 md:-mx-10">
        <div className="flex">
          <Input placeholder="FIRST NAME" type="text" name="first_name" />
          <Input placeholder="LAST NAME" type="text" name="last_name" />
        </div>
        <div className="flex">
          <Input placeholder="EMAIL" type="email" name="email" />
          <Input placeholder="BEST CONTACT NUMBER" type="phone" name="phone" />
        </div>
        <div className="flex">
          <Input placeholder="CITY" type="text" name="city" />
          <Input placeholder="PROVINCE" type="text" name="province" />
        </div>
        <div className="flex">
          <Select {...preferred_contact} />
          <Select {...best_time_to_contact} />
        </div>

        <div className="flex">
          <Input
            placeholder="APPROXIMATE DATE OF DIAGNOSIS"
            type="text"
            name="date_of_diagnosis"
          />
          <Input
            placeholder="APPROXIMATE AGE AT DIAGNOSIS"
            type="text"
            name="age_at_diagnosis"
          />
        </div>

        <div className="flex">
          <div className="basis-full md:basis-1/2 px-10">
            <p>
              Select your top 1-3 topics that you are most interested in
              discussing with a peer navigator:
            </p>
            <Accordion data={form_accordion} id="form-accordion" type="form" />
          </div>

          <div className="basis-full md:basis-1/2 px-10"></div>
        </div>
      </div>
    </form>
  );
};

export default PeerSupportForm;
