import { Link } from "react-router-dom";
import LeftArrow from "./icons/LeftArrow";

const MobileNavLevel3 = (props) => {
  const { setActiveLv3, activeLv3, itemsLv3, slugLv3, slugLv2, closeAll } = props;

  //   console.log(slugLv3);
  return (
    <div
      className={`fixed top-0 h-full -left-[100%] w-full transition-transform duration-500 ease-in-out z-10 ${
        activeLv3 ? "translate-x-[calc(100%_-_30px)]" : ""
      }`}
    >
      <div
        className="absolute right-[35px] top-[35px]"
        onClick={() => setActiveLv3(false)}
      >
        <LeftArrow fill="#fff" className="fill-white relative z-10" />
      </div>
      <ul className="absolute left-0 top-0 w-full h-full p-10 pl-[calc(2.5rem_+_60px)] pt-24 bg-darkBlue">
        {itemsLv3?.length &&
          itemsLv3.map(({ title, slug }) => (
            <li className="mb-3" key={slug}>
              <Link to={`${slugLv2}/${slugLv3}/${slug}`} onClick={closeAll}>
                <h3 className="text-white text-xl">{title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileNavLevel3;
