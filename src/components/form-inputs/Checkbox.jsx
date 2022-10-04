import { forwardRef } from "react";

const Checkbox = forwardRef(({ main, children, name, id }, ref) => {
  const mainClass = "w-[30px] min-w-[30px] h-[30px] mr-2";
  const subClass = "w-[24px] min-w-[24px] h-[24px] mr-2";

  return (
    <label className="flex items-center py-1">
      <input
        type="checkbox"
        ref={(el) => {
          if (!ref.current[name]) ref.current[name] = {};
          ref.current[name][id] = el;
        }}
        value={children}
        className={main ? mainClass : subClass}
      />
      {children}
    </label>
  );
});

export default Checkbox;
