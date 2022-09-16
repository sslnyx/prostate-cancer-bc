import Row from "../rows-cols/Row";
import Col from "../rows-cols/Col";

const ImageAndText = ({
  imgSrc,
  children,
  c1,
  c2,
  order,
  mx,
  className,
  contentWidth,
}) => {
  return (
    <section className={className}>
      <div className={contentWidth ? "max-w-[1000px] mx-auto" : ""}>
        <Row mx={mx}>
          <Col
            w={c1}
            className={`relative ${
              order === "reverse" ? "md:order-2" : "md:order-1"
            }`}
          >
            <img className="w-full left-10 mb-5 md:mb-0" src={imgSrc} />
          </Col>

          <Col
            w={c2}
            className={order === "reverse" ? "md:order-1" : "md:order-2"}
          >
            {children}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ImageAndText;
