import RightArrow from "../icons/RightArrow";
import { Link } from "react-router-dom";
import { isInternal } from "../../util/util";
import LeftArrow from "../icons/LeftArrow";

const Btn = ({ color, children, left }) => {
  return (
    <div className="flex">
      <span className={`${left ? "order-2" : "order-1"}`} color={color}>
        {children}
      </span>

      {left ? (
        <LeftArrow className={`${color} order-1 mr-3`} />
      ) : (
        <RightArrow className={`${color} order-2 ml-3`} />
      )}
    </div>
  );
};

const ArrowBtn = ({ children, className, color, href, pdf, left }) => {
  return (
    <>
      {href && !pdf ? (
        <Link to={href}>
          <div className={`flex items-center font-bold uppercase ${className}`}>
            <Btn color={color} left={left}>
              {children}
            </Btn>
          </div>
        </Link>
      ) : href && pdf ? (
        <a href={href} target="_blank">
          <div className={`flex items-center font-bold uppercase ${className}`}>
            <Btn color={color} left={left}>
              {children}
            </Btn>
          </div>
        </a>
      ) : (
        <button className={`flex items-center ${className}`}>
          <Btn color={color} left={left}>
            {children}
          </Btn>
        </button>
      )}
    </>
  );
};

export default ArrowBtn;
