const Input = ({ name, placeholder, type }) => {
  return (
    <div className="w-[50%] px-2 md:px-10">
      <input
        className="border border-darkBlue w-full placeholder:text-darkBlue py-1 px-3 mb-5"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
