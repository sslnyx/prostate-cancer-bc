const Col = ({ children, w, className, gap }) => {
  const basis = [
    null,
    "md:basis-1/12",
    "md:basis-2/12",
    "md:basis-3/12",
    "md:basis-4/12",
    "md:basis-5/12",
    "md:basis-6/12",
    "md:basis-7/12",
    "md:basis-8/12",
    "md:basis-9/12",
    "md:basis-10/12",
    "md:basis-11/12",
    "md:basis-12/12",
  ];

  const space = [
    null,
    "p-1",
    "p-2",
    "p-3",
    "p-4",
    "p-5",
    "p-6",
    "p-7",
    "p-8",
    "p-9",
    "p-10",
  ];

  const baseClase = "basis-full flex justify-center items-center";

  return (
    <div
      className={`${baseClase} ${className} ${w ? "md:first:mb-0" : ""} ${
        basis[w]
      } ${gap ? space[gap] : "px-10"}`}
    >
      {children}
    </div>
  );
};

export default Col;
