import Input from "../../components/form-inputs/Input";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const ReefKnotKitsForm = () => {

  const orderingFor = [
    "Myself, a newly diagnosed patient",
    "Myself, a patient treated for and living with prostate cancer",
    "A friend or family member with prostate cancer",
    "My support group",
    "Physician / medical professional’s office",
    "Other support program",
  ];

  return (
    <form className="-mx-2 md:-mx-10">
      <div className="flex">
        <Input type="text" placeholder="FIRST NAME*" name="first_name" />
        <Input type="text" placeholder="LAST NAME*" name="last_name" />
      </div>

      <div className="flex">
        <Input type="text" placeholder="ADDRESS*" name="address" />
        <Input type="text" placeholder="CITY*" name="city" />
      </div>

      <div className="flex">
        <Input type="text" placeholder="PROVINCE / STATE*" name="province" />
        <Input
          type="text"
          placeholder="POSTAL CODE / ZIP*"
          name="postal_code"
        />
      </div>

      <div className="flex flex-wrap">
        <Input type="phone" placeholder="TELEPHONE" name="phone" />
        <Input type="email" placeholder="EMAIL*" name="email" />
      </div>

      <div className="flex flex-wrap mb-5">
        <div className="flex flex-wrap justify-between basis-full md:basis-1/2 px-2 md:px-10 items-center mb-3 md:mb-0">
          <span className="basis-full md:basis-1/2">
            QUANTITY OF KITS REQUIRED*
          </span>
          <select
            className="border border-darkBlue basis-full md:basis-1/2 px-5 py-1"
            name=""
            defaultValue=""
          >
            <option value="" disabled>PLEASE SELECT</option>
            <option>1</option>
            <option>10</option>
            <option>20</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex justify-between flex-wrap basis-full md:basis-1/2 px-2 md:px-10 items-center">
          <span className="basis-full md:basis-1/2">
            WHO IS THIS ORDER FOR?
          </span>
          <div className="basis-full md:basis-1/2">
            <select className="border w-full border-darkBlue px-3 py-1" defaultValue="" name="">
              <option value="" disabled>PLEASE SELECT</option>
              {orderingFor.map((val) => (
                <option>{val}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <label className="flex items-center px-2 md:px-10 mb-5">
        <input
          type="checkbox"
          name="plan_for_prostate_removal_surgery"
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
          name="french"
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
          className="border border-darkBlue w-full"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <PrimaryBtn className="btn-main">SUBMIT</PrimaryBtn>
      </div>
    </form>
  );
};

export default ReefKnotKitsForm;
