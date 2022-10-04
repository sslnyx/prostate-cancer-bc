import { forwardRef } from "react";

import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const Accordion = forwardRef(({ data, id, type, children }, ref) => {
  return (
    <div
      type={`accordion-${type}`}
      className="accordion accordion-flush"
      id={id}
    >
      {children
        ? children
        : data?.map((contentData, i) => (
            <div
              key={i}
              className={`accordion-item border-t-0 border-l-0 border-r-0 rounded-none  ${
                type === "form"
                  ? "bg-white"
                  : type === "white"
                  ? "bg-white"
                  : "bg-blue mx-10 mb-10"
              }`}
            >
              <AccordionTitle {...contentData} idx={i} type={type} />
              <AccordionContent {...contentData} idx={i} id={id} type={type} ref={ref}/>
            </div>
          ))}
    </div>
  );
});

export default Accordion;
