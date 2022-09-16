import { toSnakeCase } from "../util/util";
import AccordionCard from "./AccordionCard";

const AccordionContent = ({ content, idx, id, checkbox, type, children }) => {
  return (
    <div
      id={`flush-collapse-${idx}`}
      className="accordion-collapse border-0 collapse"
      aria-labelledby={`flush-heading-${idx}`}
      data-bs-parent={`#${id}`}
    >
      <div className={`accordion-body ${type !== "white" ? "py-4 px-5" : ""}`}>
        {children ? (
          children
        ) : content && id === "more-resources-accordion" ? (
          <>
            {content.map((data, i) => (
              <AccordionCard {...data} />
            ))}
          </>
        ) : content ? (
          <div
            className="md:p-11 md:pt-5"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : (
          <>
            {checkbox?.map(({ id, main, sub }) => (
              <div className="mb-5">
                <div className="mb-3">
                  <label key={id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-[30px] min-w-[30px] h-[30px]"
                    />
                    <span className="ml-5">{main}</span>
                  </label>
                </div>

                <div className="ml-10">
                  {sub?.map((el) => (
                    <div>
                      <label
                        key={toSnakeCase(el)}
                        className="flex items-center mb-3"
                      >
                        <input type="checkbox" className="w-[24px] h-[24px]" />
                        <span className="ml-5">{el}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AccordionContent;
