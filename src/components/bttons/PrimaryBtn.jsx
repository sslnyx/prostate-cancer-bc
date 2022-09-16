import { isInternal, removeBaseUrl } from "../../util/util";
import { Link } from "react-router-dom";

const PrimaryBtn = (props) => {
  const { children, className, href, type, hash, onClick } = props;

  const btnClass = `inline-block uppercase rounded-[5px] border-2 px-[1rem] py-[0.5rem] font-bold text-white hover:bg-transparent ${className}`;

  return (
    <div>
      {href && isInternal(href) ? (
        <Link className={btnClass} to={removeBaseUrl(href)}>
          {children}
        </Link>
      ) : hash ? (
        <Link className={btnClass} to={hash}>
          {children}
        </Link>
      ) : href ? (
        <a target="_blank" href={href} className={btnClass}>
          {children}
        </a>
      ) : (
        <button
          onClick={onClick ? onClick : () => null}
          className={btnClass}
          type={type ? type : "button"}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default PrimaryBtn;
