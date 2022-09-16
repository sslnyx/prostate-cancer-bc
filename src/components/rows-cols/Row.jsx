const Row = ({ children, mx, className }) => {
  return (
    <div className={`flex flex-wrap ${mx ? mx : "-mx-10"} ${className}`}>{children}</div>
  );
};

export default Row;
