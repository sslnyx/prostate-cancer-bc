import PrimaryBtn from "./bttons/PrimaryBtn";

const SubscribForm = () => {
  const subscribeHandler = (ev) => {
    ev.preventDefault();
    console.log("submited");
  };

  return (
    <form onSubmit={subscribeHandler}>
      <div className="text-center lg:text-left items-center">
        <p className="lg:mr-5 mb-3 font-bold">Subscribe for Latest News</p>

        <div className="">

          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="basis-full md:basis-1/2 mb-3 xl:mb-0 px-3">
              <input
                className="w-full"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div className="basis-full md:basis-1/2 px-3">
              <input
                className="w-full"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <input
            className="w-full mb-3"
            type="email"
            placeholder="Email Address"
            required
          />

          <PrimaryBtn className="btn-main px-10 mb-3 xl:mb-0" type="submit">
            Submit
          </PrimaryBtn>
        </div>
      </div>
    </form>
  );
};

export default SubscribForm;
