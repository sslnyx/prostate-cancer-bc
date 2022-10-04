import ErrorMessage from "../../pages/WaysToGive/ErrorMessage";

const Input = ({ name, placeholder, type, required, error }) => {
  // console.log(error?.message);
  return (
    <div className="w-full px-2 md:px-10 relative">
      <input
        required={required ? true : false}
        className="border border-darkBlue w-full placeholder:text-darkBlue py-1 px-3 mb-5"
        type={type}
        placeholder={placeholder}
        name={name}
      />

      {error?.message && (
        <small className="block absolute bottom-0 text-red-400">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default Input;
