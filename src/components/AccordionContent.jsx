import { forwardRef } from "react";
import { toSnakeCase } from "../util/util";
import AccordionCard from "./AccordionCard";

const AccordionContent = forwardRef(
  ({ content, idx, id, checkbox, type, children, title }, ref) => {
    // console.log(title)
    return (
      <div
        id={`flush-collapse-${idx}`}
        className="accordion-collapse border-0 collapse"
        aria-labelledby={`flush-heading-${idx}`}
        data-bs-parent={`#${id}`}
      >
        <div
          className={`accordion-body ${type !== "white" ? "py-4 px-5" : ""}`}
        >
          {children ? (
            children
          ) : content && id === "more-resources-accordion" ? (
            <>
              {content.map((data, i) => (
                <AccordionCard key={i} {...data} />
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
                <div className="mb-5" key={id}>
                  <div className="mb-3">
                    <label className="flex items-center">
                      <input
                        value={main}
                        ref={(el) => {
                          if (!ref.current[title]) ref.current[title] = {};
                          if (!ref.current[title][id])
                            ref.current[title][id] = {};
                          ref.current[title][id].dom = el;
                          if (sub?.length) ref.current[title][id].sub = true;
                        }}
                        onChange={(ev) => {
                          ev.target.checked
                            ? (ref.current[title][id].checked = true)
                            : (ref.current[title][id].checked = false);

                          if (
                            ref.current[title][id].checked === false &&
                            sub?.length
                          ) {
                            for (const element of sub) {
                              const dom = ref.current[title][id][element]?.dom;
                              if (dom) {
                                dom.checked = false;
                              }
                            }
                          }

                          // console.log(ref)


                          for (const [key, { checked }] of Object.entries(
                            ref.current[title]
                          )) {
                            if (checked)
                              return (ref.current[title].checked = true);
                            if (!checked) ref.current[title].checked = false;
                          }
                        }}
                        type="checkbox"
                        className="w-[30px] min-w-[30px] h-[30px]"
                      />
                      <span className="ml-5">{main}</span>
                    </label>
                  </div>

                  <div className="ml-10">
                    {sub?.map((el, i) => (
                      <div key={i}>
                        <label
                          key={toSnakeCase(el)}
                          className="flex items-center mb-3"
                        >
                          <input
                            ref={(domEl) => {
                              if (!ref.current[title][id][el])
                                ref.current[title][id][el] = {};
                              ref.current[title][id][el].dom = domEl;
                            }}
                            type="checkbox"
                            onChange={(ev) => {
                              // ev.target.checked
                              //   ? (ref.current[title][main][el] = true)
                              //   : (ref.current[title][main][el] = false);

                              for (const [key, val] of Object.entries(
                                ref.current[title][id]
                              )) {
                                // console.log(key);
                                if (key === el && val) {
                                  return (ref.current[title][
                                    id
                                  ].dom.checked = true);

                                  console.log(ref.current[title][id].dom);
                                }
                              }
                            }}
                            className="w-[24px] h-[24px]"
                          />
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
  }
);

export default AccordionContent;
