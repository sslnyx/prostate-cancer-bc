// import Input from "../../../components/forminputs/Input";
import { useOutletContext } from "react-router-dom";
import Input from "../../../components/form-inputs/Input";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";
import Checkbox from "../../../components/form-inputs/Checkbox";

const VolunteerForm = () => {
  const events = useOutletContext();
  const positions = ["Portrait photographer"];

  return (
    <div className="container">
      <div className="flex justify-end mb-3">
        <span>* required</span>
      </div>
      <form>
        <div className="flex flex-row -mx-2 md:-mx-10">
          <Input type="text" name="name" placeholder="NAME*" />

          <Input type="text" name="city" placeholder="CITY*" />
        </div>

        <div className="flex flex-row -mx-2 md:-mx-10">
          <Input type="email" name="email" placeholder="EMAIL*" />

          <Input type="text" name="province" placeholder="PROVINCE*" />
        </div>

        <div className="flex flex-row -mx-2 md:-mx-10">
          <Input type="phone" name="phone" placeholder="PHONE*" />
        </div>

        <div className="flex flex-row flex-wrap -mx-2 md:-mx-10 mb-5">
          <div className="basis-full md:basis-1/2 px-2 md:px-10 mb-5">
            {/* <select
              className="border border-darkBlue w-full px-3 py-1 uppercase"
              name="position"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Specify what you would like to volunteer for
              </option>
              {positions.map((position) => (
                <option>{position}</option>
              ))}
            </select> */}

            <div className="flex flex-col">
              <p>Specify what you would like to volunteer for</p>
              <Checkbox main>
                <span>Foundation</span>
              </Checkbox>

              <Checkbox main>
                <span>Support Groups</span>
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
              <Checkbox main>
                <span>The Father’s Day Walk / Run</span>
              </Checkbox>
              <Checkbox main>
                <span>West Coast Ride to Live</span>
              </Checkbox>
              <Checkbox main>
                <span>Pars for Prostate</span>
              </Checkbox>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn type="submit" className="btn-main">
            submit
          </PrimaryBtn>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
