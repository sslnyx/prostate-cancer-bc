import SectionTitle from "./SectionTitle";

const PageTitle = ({
  title,
  description,
  p1,
  p2,
  className,
  logoSrc,
  reverse,
  children,
}) => {
  return (
    <section className="border-none">
      <div className="container">
        <div className="flex flex-row flex-wrap md:-mx-10 items-center">
          <div
            className={`basis-full ${
              description || children ? "md:basis-1/2 mb-5" : ""
            } md:px-10 md:mb-0 flex ${
              reverse ? "order-2 justify-end" : "order-1 justify-start"
            }`}
          >
            {logoSrc ? (
              <img className="max-w-[180px] md:max-w-[350px] mx-auto md:mx-0 max-h-[250px]" src={logoSrc} alt="logo" />
            ) : p1 && p2 ? (
              <SectionTitle p1={p1} p2={p2} className={className} />
            ) : (
              <h1
                className="uppercase text-blue lg:text-8xl mb-3 md:mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>

          <div
            className={`basis-full ${
              description || children ? "md:basis-1/2" : ""
            } md:px-10 flex ${
              reverse ? "order-1 md:justify-start" : "order-2 md:justify-end"
            }`}
          >
            {description ? (
              <p dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
